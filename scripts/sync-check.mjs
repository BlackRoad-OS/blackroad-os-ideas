import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ideasDir = path.join(process.cwd(), 'ideas');
const files = fs.readdirSync(ideasDir).filter((file) => file.endsWith('.md'));

if (files.length === 0) {
  throw new Error('No idea markdown files found in /ideas.');
}

const requiredFields = ['title', 'tags', 'status', 'eta'];

for (const file of files) {
  const content = fs.readFileSync(path.join(ideasDir, file), 'utf8');
  const parsed = matter(content);
  const missing = requiredFields.filter((field) => !(field in parsed.data));
  if (missing.length) {
    throw new Error(`${file} is missing front-matter fields: ${missing.join(', ')}`);
  }
}

console.log(`Parsed ${files.length} idea files successfully.`);
