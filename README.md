#Postie

[Amazon Dash](https://www.amazon.co.uk/b?ie=UTF8&node=10833773031) button handler to notify when a package has been delivered. Based on James Smith's [Poo Button](https://floppy.org.uk/blog/2016/11/20/the-poo-button/).

When the postman delivers a package the button can be pressed and will record the event in some way yet to be decided...

##Running

Execute:
```
DASH_BUTTON_MAC_ADDRESS='<button_mac_address>' npm start
```

Where `<button_mac_address>` can be found by running `
sudo npm run-script findbutton`, pressing the dash button and noting the mac address of devices listed with the manufacturer 'Amazon Technologies Inc.' and protocol of 'arp'.