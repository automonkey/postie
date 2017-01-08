const dashButton = require('node-dash-button');

const macAddress = environmentVariableOrError('DASH_BUTTON_MAC_ADDRESS');

const dashController = dashButton(macAddress, null, null, 'all');

dashController.on('detected', () => {
  console.log('You just dashed...');
});

function environmentVariableOrError(envVar) {
  const val = process.env[envVar];
  if(val !== undefined) {
    return val;
  }

  console.log('Missing required environment variable \'' + envVar + '\'');
  process.exit();
}
