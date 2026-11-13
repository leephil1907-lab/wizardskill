export type Resource = { name: string; category: string; description: string; url: string; tag: string }
export const resources: Resource[] = [
  { name:'Modulify', category:'Build', description:'Explore AI-assisted website and app building.', url:'https://modulify.ai', tag:'AI builder' },
  { name:'MotionIn', category:'Build', description:'Website creation and motion-led inspiration.', url:'https://motionin.design', tag:'Motion' },
  { name:'Landdding', category:'Web inspiration', description:'Landing page examples and visual direction.', url:'https://landdding.com', tag:'Landing pages' },
  { name:'Godly', category:'Web inspiration', description:'Distinctive websites and interaction patterns.', url:'https://godly.website', tag:'Inspiration' },
  { name:'Recent', category:'Web inspiration', description:'Contemporary web and product design inspiration.', url:'https://recent.design', tag:'Discovery' },
  { name:'On Design', category:'Web inspiration', description:'Design community and shared work.', url:'https://on.design', tag:'Community' },
  { name:'Footer Design', category:'Web inspiration', description:'Footer patterns and information architecture.', url:'https://footer.design', tag:'Patterns' },
  { name:'Mobbin', category:'Product UI', description:'Real-world mobile and web product screens.', url:'https://mobbin.com', tag:'UI patterns' },
  { name:'Wonderlist', category:'Product UI', description:'Figma design references and community files.', url:'https://wonderlist.design', tag:'Figma' },
  { name:'BeUI', category:'Product UI', description:'Interface components and animated UI references.', url:'https://beui.dev', tag:'Components' },
  { name:'60FPS', category:'Motion', description:'Mobile interface animation and interaction references.', url:'https://60fps.design', tag:'Micro-interactions' },
  { name:'Iconly', category:'Brand & assets', description:'Icon exploration and icon-system references.', url:'https://iconly.design', tag:'Icons' },
  { name:'Font in Logo', category:'Brand & assets', description:'Typography and type-led brand inspiration.', url:'https://fontinlogo.com', tag:'Typography' },
  { name:'Logo to Use', category:'Brand & assets', description:'Logo and identity inspiration.', url:'https://logotouse.com', tag:'Identity' },
  { name:'Backgrounds Supply', category:'Brand & assets', description:'Background and visual texture resources.', url:'https://backgrounds.supply', tag:'Backgrounds' },
  { name:'ViralPost Design', category:'Social creative', description:'Social post and campaign creative inspiration.', url:'https://viralpost.design', tag:'Social' },
  { name:'Posts Design', category:'Social creative', description:'Brand and social post references.', url:'https://posts.design', tag:'Campaigns' },
  { name:'Paper Animation', category:'Motion', description:'Animation and paper-inspired visual experiments.', url:'https://paperanimation.ai', tag:'Animation' },
  { name:'sent.dm', category:'Messaging', description:'Messaging service discovery; verify coverage and pricing.', url:'https://sent.dm', tag:'Messaging' }
]
export const categories = ['All', ...Array.from(new Set(resources.map(r => r.category)))]
