#!/usr/bin/env node
/**
 * Check the HTTP reachability of URLs in docs/resource-catalog.md.
 * This is a lightweight availability check, not a security or license audit.
 * Usage: node scripts/check-links.mjs
 */
import { readFile } from "node:fs/promises";

const file = new URL("../docs/resource-catalog.md", import.meta.url);
const markdown = await readFile(file, "utf8");
const urls = [...new Set(markdown.match(/https?:\/\/[^\s|)]+/g) ?? [])];

if (urls.length === 0) {
  console.log("No URLs found.");
  process.exit(0);
}

const timeoutMs = 12000;
const concurrency = 5;
let cursor = 0;
const results = [];

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "WizardSkill-Link-Checker/1.0" },
    });
    if (response.status === 403 || response.status === 405 || response.status === 501) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "WizardSkill-Link-Checker/1.0" },
      });
    }
    return { url, status: response.status, ok: response.ok };
  } catch (error) {
    return { url, status: "ERROR", ok: false, error: error.name === "AbortError" ? "timeout" : error.message };
  } finally {
    clearTimeout(timer);
  }
}

async function worker() {
  while (cursor < urls.length) {
    const index = cursor++;
    results[index] = await check(urls[index]);
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker));

for (const result of results) {
  const status = result.ok ? "OK" : "CHECK";
  console.log(`[${status}] ${result.status} ${result.url}${result.error ? ` — ${result.error}` : ""}`);
}

const failed = results.filter((result) => !result.ok);
console.log(`\nChecked ${results.length} URLs; ${results.length - failed.length} reachable; ${failed.length} need review.`);
if (failed.length) process.exitCode = 1;
