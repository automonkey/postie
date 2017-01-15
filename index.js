const dashButton = require('node-dash-button');

const SlackNotifier = require('./slackNotifier');

const macAddress = environmentVariableOrError('DASH_BUTTON_MAC_ADDRESS');

const slackNotificationConfig = {
  webHookUrl: environmentVariableOrError('SLACK_WEB_HOOK_URL'),
  channel: environmentVariableOrError('SLACK_CHANNEL')
};

const dashController = dashButton(macAddress, null, null, 'all');
const slackNotifier = new SlackNotifier(slackNotificationConfig);

dashController.on('detected', () => {
  console.log('You just dashed...');
  slackNotifier.notify();
});

function environmentVariableOrError(envVar) {
  const val = process.env[envVar];
  if(val !== undefined) {
    return val;
  }

  console.log('Missing required environment variable \'' + envVar + '\'');
  process.exit();
}
