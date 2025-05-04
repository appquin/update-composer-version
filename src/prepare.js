const resolveConfig = require("./resolve-config.js");
const { readFileSync, writeFileSync } = require("fs");

module.exports = async (pluginConfig, { nextRelease: { version }, logger }) => {
  const { path } = resolveConfig(pluginConfig);
  const composer = JSON.parse(readFileSync(path, "utf8"));
  composer.version = version;
  writeFileSync(path, JSON.stringify(composer, null, 2) + "\n");
  logger.log(`✅ composer.json actualizado a ${version}`);
};
