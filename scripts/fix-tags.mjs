import fs from "fs";
import path from "path";

const closeOld = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 62);
const closeNew = String.fromCharCode(60, 47, 100, 105, 118, 62);
const openOld = String.fromCharCode(60, 109, 111, 116, 105, 111, 110, 32);
const openNew = String.fromCharCode(60, 100, 105, 118, 32);

function fix(file) {
  let t = fs.readFileSync(file, "utf8");
  if (!t.includes("motion")) return;
  t = t.split(closeOld).join(closeNew);
  t = t.split(openOld).join(openNew);
  fs.writeFileSync(file, t);
  console.log("fixed", file);
}

const root = "d:/mytest/imageconvert/src";
for (const dir of ["app", "components"]) {
  const walk = (d) => {
    for (const name of fs.readdirSync(d)) {
      const full = path.join(d, name);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (name.endsWith(".tsx")) fix(full);
    }
  };
  walk(path.join(root, dir));
}
