import { getVantConfig } from "./constant.js";

function getCssLang() {
  const vantConfig = getVantConfig();
  const preprocessor = "less";
  return preprocessor;
}

export const CSS_LANG = getCssLang();
