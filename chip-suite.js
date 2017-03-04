/*
 * Copyright reelyActive 2017
 * We believe in an open Internet of Things
 */

var server = require('hlc-server');
var os = require('os');


// User-configurable: port and password
var options = { httpPort: 80, password: "admin", useCors: true };

// See hlc-server documentation for additional options
var app = new server(options);
 
// OPTIONAL: Expect a BLE-capable CHIP Pro, listen on the integrated radio
app.bind( { protocol: "hci", path: null } );

// OPTIONAL: Listen for a reelyActive starter kit on the USB port
//app.bind( { protocol: "serial", path: "auto" } );

// Friendly console message of the IP address of the CHIP Pro
var networkInterfaces = os.networkInterfaces();
console.log('\r\n*******************************************');
if(networkInterfaces.hasOwnProperty('wlan0')) {
  console.log('Browse to your CHIP Pro at http://' +
              networkInterfaces.wlan0[0].address);
}
console.log('*******************************************\r\n');



