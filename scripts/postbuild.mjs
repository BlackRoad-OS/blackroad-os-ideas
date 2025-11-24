import fs from 'node:fs/promises';
import path from 'node:path';

const beacon = {
  ts: new Date().toISOString(),
  agent: 'Ideas-Gen-0',
};

const targetPath = path.join(process.cwd(), 'public', 'sig.beacon.json');
await fs.mkdir(path.dirname(targetPath), { recursive: true });
await fs.writeFile(targetPath, JSON.stringify(beacon, null, 2));
console.log(`sig.beacon.json refreshed at ${beacon.ts}`);
