import { getVantConfig } from "../common/index.js";
import { SITE_SRC_DIR } from "../common/constant.js";
import vitePluginVue from "@vitejs/plugin-vue";
import { genSiteMobileShared } from '../compiler/gen-site-mobile-shared.js';

function getSiteConfig(vantConfig) {
  const siteConfig = vantConfig.site;
  return siteConfig.locales["zh-CN"];
}

function getTitle(config) {
  let { title } = config;
  return title;
}

function vitePluginGenVantBaseCode() {
  const virtualMobileModuleId = "site-mobile-shared";
  const resolvedMobileVirtualModuleId = `vant-cli:${virtualMobileModuleId}`;
  return {
    name: "vite-plugin(vant-cli):gen-site-base-code",
    resolvedId(id) {
      if (id === virtualMobileModuleId) {
        return resolvedMobileVirtualModuleId;
      }
    },
    load(id) {
      switch (id) {
        case resolvedMobileVirtualModuleId:
          return genSiteMobileShared();
      }
    },
  };
}

export function getViteConfigForSiteDev() {
  const vantConfig = getVantConfig();
  const siteConfig = getSiteConfig(vantConfig);
  const title = getTitle(siteConfig);
  return {
    root: SITE_SRC_DIR,
    plugins: [vitePluginVue()],
    server: {
      host: "0.0.0.0",
    },
  };
}
