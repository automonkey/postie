const request = require('request');

class SlackNotifier {

  constructor(cfg) {
    this.channel = cfg.channel;
    this.webHookUrl = cfg.webHookUrl;
  }

  notify() {
    console.log('sending slack notification...');
    const payload = {
      channel: this.channel,
      username: 'Postie',
      text: 'Delivery received at Mum\'s.',
      icon_emoji: ':truck:'};

    request.post({
        url: this.webHookUrl,
        form: 'payload=' + JSON.stringify(payload)
      },
      function(err,httpResponse,body) {
        if(err) {
          console.log('error:\n' + err);
        }
        console.log(body);
      }
    );
  }

}

module.exports = SlackNotifier;