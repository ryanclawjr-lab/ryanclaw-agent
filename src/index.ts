import { app } from './lib/agent';
import { cors } from 'hono/cors';
import { serveStatic } from 'hono/bun';
import { readFileSync } from 'fs';

// Add CORS for A2A protocol
app.use('/*', cors());

// Serve .well-known for A2A auto-discovery
app.use('/.well-known/*', serveStatic({
  root: './src',
  getContent: (path) => {
    try {
      const filePath = path.replace('/.well-known/', 'well-known/');
      return readFileSync(filePath);
    } catch (e) {
      return null;
    }
  }
}));

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

console.log(`Starting RyanClaw agent server on port ${port}...`);
console.log(`Agent ID: 2079 (ERC-8004)`);
console.log(`Wallet: 0x687716fd518a5B257cE13455Ffd9967db309Ac1B`);
console.log(`Network: Base`);
console.log(`A2A Discovery: /.well-known/agent.json`);

export default {
  port,
  fetch: app.fetch,
};
