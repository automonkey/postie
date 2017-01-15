module.exports = () => {
  return {
    dashButtonAddress: environmentVariableOrError('DASH_BUTTON_MAC_ADDRESS'),
    slack: {
      webHookUrl: environmentVariableOrError('SLACK_WEB_HOOK_URL'),
      channel: environmentVariableOrError('SLACK_CHANNEL')
    }
  }
};

function environmentVariableOrError(envVar) {
  const val = process.env[envVar];
  if(val !== undefined) {
    return val;
  }

  console.log('Missing required environment variable \'' + envVar + '\'');
  process.exit();
}