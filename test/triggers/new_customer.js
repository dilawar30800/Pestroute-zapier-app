require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - new_customer', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        authenticationToken: process.env.AUTHENTICATION_TOKEN,
        authenticationKey: process.env.AUTHENTICATION_KEY,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
      },

      inputData: {},
    };

    const results = await appTester(
      App.triggers['new_customer'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
