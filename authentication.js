const testAuth = (z, bundle) => {
  const options = {
    url: 'https://gregoryspest.pestroutes.com/api/customer/search',
    method: 'GET',
    headers: {},
    params: {
      authenticationKey: bundle.authData.authenticationKey,
      authenticationToken: bundle.authData.authenticationToken,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  type: 'custom',
  test: testAuth,
  fields: [
    {
      computed: false,
      key: 'authenticationToken',
      required: true,
      label: 'Authentication Token',
    },
    {
      computed: false,
      key: 'authenticationKey',
      required: true,
      label: 'Authentication Key',
    },
  ],
  customConfig: {},
};
