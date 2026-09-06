// serve.mjs — starts the Astro dev server directly via the JS API,
// bypassing the daemon/CLI wrapper that silently fails on Windows.
import { dev } from 'astro';

const server = await dev({
  root: import.meta.dirname ?? process.cwd(),
  server: {
    host: '127.0.0.1',
    port: 3999,
    open: false,
  },
  logLevel: 'info',
});

console.log(`\n✅  Site is live at http://127.0.0.1:${server.address.port}\n`);

// Keep the process alive until Ctrl+C
process.on('SIGINT', async () => {
  await server.stop();
  process.exit(0);
});
