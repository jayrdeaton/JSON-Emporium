let Emporium = require('emporium'),
  { JSONAdapter } = require('./src/adapters');

Emporium.JSONAdapter = JSONAdapter;

module.exports = Emporium;
