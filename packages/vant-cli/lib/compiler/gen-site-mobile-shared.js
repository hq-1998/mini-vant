import { readdirSync } from "node:fs";
import { SRC_DIR } from '../common/constant.js';

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
}
