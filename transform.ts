import fs from "fs";
import postcss, { AcceptedPlugin, Plugin } from "postcss";
import glob from "glob";

const transformPlugin: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    if (decl.prop === "color") {
      decl.value = "red";
    }
  },
};

const plugins: AcceptedPlugin[] = [transformPlugin];
const processor = postcss(plugins);

const transform = async () => {
  const files = glob.sync("./src/**/*.css");

  await Promise.all(
    files.map(async (file) => {
      const contents = fs.readFileSync(file).toString();

      const result = await processor.process(contents, { from: undefined });

      fs.writeFileSync(file, result.css);
    })
  );
};

transform();
