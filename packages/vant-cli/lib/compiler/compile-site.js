import { getViteConfigForSiteDev } from "../config/vite.site.js";
import { mergeCustomViteConfig } from '../common/index.js';
import { createServer } from 'vite';

export async function compileSite() {
  const config = await mergeCustomViteConfig(
    getViteConfigForSiteDev(),
    "development"
  );
  const server = await createServer(config);
  await server.listen();
  server.printUrls();
}
