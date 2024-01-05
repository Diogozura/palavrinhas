const EXTERNAL_DATA_URL = 'https://www.easycalculos.com';
import { cmsService } from '../src/cms/cmsService'
import moment from 'moment';
function generateSiteMap(tabelas, juros, blog) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.easycalculos.com/</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/termo-uso</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>0.5</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/politicas-de-privacidade</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>0.5</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/contato</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>0.7</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/novidades</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/sobre</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/servicos</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/tabelas</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/juros</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.easycalculos.com/blog</loc>
       <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     ${tabelas
      .map(({ link }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/tabelas/${link}`}</loc>
           <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
           <changefreq>weekly</changefreq>
          <priority>1.0</priority>
       </url>
     `;
      })
      .join('')}

     ${juros
      .map(({ link }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/juros/${link}`}</loc>
           <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
           <changefreq>weekly</changefreq>
          <priority>1.0</priority>
       </url>
     `;
      })
      .join('')}
     ${blog
      .map(({ link }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/blog/${link}`}</loc>
           <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
           <changefreq>weekly</changefreq>
          <priority>1.0</priority>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const { data: tabelasData } = await cmsService({
    query: `query
      {
        allTabelas {
            id
            titulo
            link
            updatedAt
      }
    }`,
    variables: {}
  });

  const { data: jurosData } = await cmsService({
    query: `query
      {
        allJuros {
            id
            titulo
            link
            updatedAt
      }
    }`,
    variables: {}
  });

  const { data: blogsData } = await cmsService({
    query: `query
      {
        allBlogs {
            id
            titulo
            link
            updatedAt
      }
    }`,
    variables: {}
  });
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(tabelasData.allTabelas, jurosData.allJuros, blogsData.allBlogs);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;