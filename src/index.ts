import { app } from './lib/agent';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

console.log(`Starting RyanClaw agent server on port ${port}...`);
console.log(`Agent ID: 2079 (ERC-8004)`);
console.log(`Wallet: 0x687716fd518a5B257cE13455Ffd9967db309Ac1B`);
console.log(`Network: Base`);

export default {
  port,
  fetch: app.fetch,
};
