const verify = require("./src/verify");
const prepareComposerUpdate = require("./src/prepare.js");

let verified;

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
async function verifyConditions(pluginConfig, context) {
  await verify(pluginConfig, context);
  verified = true;
}

async function prepare(pluginConfig, context) {
  if (!verified) {
    await verifyConditions(pluginConfig);
    verified = true;
  }

  await prepareComposerUpdate(pluginConfig, context);
}

module.exports = { verifyConditions, prepare };
