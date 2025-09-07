import fg from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'src/assets/articles');

function slugify(s) {
    return String(s)
        .trim()
        .toLowerCase()
        .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
        .replace(/^-+|-+$/g, '');
}

const files = await fg('*.md', { cwd: DIR });
const items = [];

for (const file of files) {
    const full = path.join(DIR, file);
    const md = fs.readFileSync(full, 'utf8');
    const { data } = matter(md);
    const stat = fs.statSync(full);

    const title = data.title ?? path.basename(file, '.md');
    const slug = data.slug ?? slugify(title);
    const date = data.date ?? new Date(stat.mtime).toISOString().slice(0, 10);
    const summary = data.summary ?? '';

    items.push({ title, slug, date, summary, file });
}

// newest → oldest
items.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(
    path.join(DIR, 'index.json'),
    JSON.stringify(items, null, 2),
    'utf8'
);

console.log(`Wrote ${items.length} article(s) to index.json`);
