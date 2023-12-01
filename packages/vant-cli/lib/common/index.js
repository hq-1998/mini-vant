import { getVantConfig } from "./constant.js";
import { loadConfigFromFile, mergeConfig } from 'vite';

export async function mergeCustomViteConfig(config, mode) {
  console.log("mergeCustomViteConfig");
  const vantConfig = getVantConfig();
  const userConfig = await loadConfigFromFile({
    mode: 'development',
    command: "serve",
  }, undefined, process.cwd());
  return config;
}

export { getVantConfig };
