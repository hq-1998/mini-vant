import { getVantConfig } from "./constant.js";
import { loadConfigFromFile, mergeConfig } from "vite";

const camelizeRE = /-(\w)/g;
const pascalizeRE = /(\w)(\w*)/g;

// action-bar -> actionBar
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

// actionBar -> ActionBar
export function pascalize(str) {
  return camelize(str).replace(pascalizeRE, (_, c1, c2) => {
    return c1.toUpperCase() + c2;
  });
}

export async function mergeCustomViteConfig(config, mode) {
  const vantConfig = getVantConfig();
  const userConfig = await loadConfigFromFile(
    {
      mode: "development",
      command: "serve",
    },
    undefined,
    process.cwd()
  );
  return config;
}

export { getVantConfig };
