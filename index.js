const dashButton = require('node-dash-button');

const readConfig = require('./readConfig');
const SlackNotifier = require('./slackNotifier');

const cfg = readConfig();
const dashController = dashButton(cfg.dashButtonAddress, null, null, 'all');
const slackNotifier = new SlackNotifier(cfg.slack);

dashController.on('detected', () => {
  console.log('You just dashed...');
  slackNotifier.notify();
});