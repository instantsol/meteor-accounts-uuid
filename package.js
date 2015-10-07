Package.describe({
  name: 'instantsolutions:accounts-uuid',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use(['accounts-base',], ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.addFiles('accounts-uuid_client.js', 'client');
  api.addFiles('accounts-uuid_server.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('phowat:accounts-uuid');
  api.addFiles('accounts-uuid-tests.js');
});
