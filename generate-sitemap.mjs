import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import glob from 'glob';

// Pfade anpassen
const SITE_URL   = 'https://www.sakaits.com';
const DIST_DIR   = 'dist/it-services/browser';       // dein Build-Pfad
const OUTPUT_FILE = `${DIST_DIR}/sitemap.xml`;

// 1. Alle HTML-Dateien finden (außer 404 & index)
const files = glob.sync(`${DIST_DIR}/**/*.html`, { nodir: true })
  .filter(f => !f.endsWith('404.html'));

const smStream = new SitemapStream({ hostname: SITE_URL });

for (const f of files) {
  const url = f
    .replace(`${DIST_DIR}`, '')   // Pfadteil abschneiden
    .replace(/index\.html$/, '')  // “/about/index.html” → “/about/”
    .replace(/\.html$/, '');      // “/faq.html” → “/faq”
  smStream.write({ url, changefreq: 'weekly' });
}

smStream.end();
const data = await streamToPromise(smStream);
createWriteStream(OUTPUT_FILE).end(data);

console.log(`✅  Sitemap geschrieben nach ${OUTPUT_FILE}`);
