
import moment from 'moment';
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.clinicapalavrinhas.com.br/</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.clinicapalavrinhas.com.br/politicadeprivacidade</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>0.5</priority>
     </url>
     <url>
       <loc>https://www.clinicapalavrinhas.com.br/contato</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>0.7</priority>
     </url>
 `;
}



export default generateSiteMap;