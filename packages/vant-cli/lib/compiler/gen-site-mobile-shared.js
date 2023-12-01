import { readdirSync } from "node:fs";
import { SRC_DIR } from "../common/constant.js";
import { CSS_LANG } from "../common/css.js";
import { pascalize } from "../common/index.js";

function genImports(demos) {
  return demos
    .map((item) => {
      const path = item.path;
      return `const ${item.name} = () => import('${path}')`;
    })
    .join("\n");
}

function genExports(demos) {
  // export const demos = {
  //   ActionBar,
  // };
  return `export const demos = {\n  ${demos.map((item) => item.name).join(',\n  ')}\n};`;
}

function genCode(components) {
  /**
   *  [
   *    {
   *      component: 'action-bar',
   *      name: 'ActionBar',
   *      path: 'action-bar/demo/index.vue',
   *    }
   *  ]
   */
  const demos = components.map((component) => {
    return {
      component,
      // action-bar -> actionBar -> ActionBar
      name: pascalize(component),
      path: join(SRC_DIR, compoennt, "demo/index.vue"),
    };
  });

  // const ActionBar = () => import('D:/gs/vant4/packages/vant/src/action-bar/demo/index.vue')
  return `import 'package-style.${CSS_LANG}';
  ${genImports(demos)}

  ${genExports(demos)}
  `;
}

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);
  return code;
}
