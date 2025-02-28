import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const SITE_URL = 'https://www.petermatama.co.ke';

// Define the pages you want to include in the sitemap
const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

(async () => {
    try {
        const sitemap = new SitemapStream({ hostname: SITE_URL });

        // Add each page to the sitemap
        pages.forEach(page => sitemap.write(page));

        sitemap.end();

        // Convert to XML and save to the public folder
        const sitemapXML = await streamToPromise(sitemap);

        writeFileSync('./public/sitemap.xml', sitemapXML.toString(), 'utf8');

        console.log('✅ Sitemap generated successfully!');
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
    }
})();
