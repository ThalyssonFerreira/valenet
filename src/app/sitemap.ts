export default function sitemap() {
  const base = "https://valenet-site.vercel.app/"; 
  const now = new Date();

  return [
    { url: `${base}/`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/planos`,  lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/suporte`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
  ];
}
