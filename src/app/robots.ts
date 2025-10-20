export default function robots() {
  const site = "https://valenet-site.vercel.app/"; 
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
