import { fileURLToPath, pathToFileURL } from "node:url";
import { join, dirname } from "node:path";
import { existsSync, readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const SITE_SRC_DIR = join(__dirname, '..', '..', 'site');

function findRootDir(dir) {
  console.log(dir, "===dir===");
  if (existsSync(join(dir, "vant.config.mjs"))) {
    return dir;
  }
}

export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const VANT_CONFIG_FILE = join(ROOT, "vant.config.mjs");

async function getVantConfigAsync() {
  try {
    // VANT_CONFIG_FILE vant目录下 vant.config.mjs
    return (await import(pathToFileURL(VANT_CONFIG_FILE).href)).default;
  } catch (err) {
    return {};
  }
}

const vantConfig = await getVantConfigAsync();
export function getVantConfig() {
  return vantConfig;
}
