module.exports = {
	development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "87716", // match any network
    websockets: true
  },
  compilers: {
     solc: {
       version: "0.4.19"
     }
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
}
};
