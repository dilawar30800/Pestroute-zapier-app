const perform = (z, bundle) => {
  // const options = {
  //   url: 'https://gregoryspest.pestroutes.com/api/customer/search',
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json'
  //   },
  //   params: {
  //     'authenticationToken': bundle.authData.authenticationToken,
  //     'authenticationKey': bundle.authData.authenticationKey
  //   }
  // }

  // return z.request(options)
  //   .then((response) => {
  //     response.throwForStatus();
  //     const results = response.json;

  //     // You can do any parsing you need for results here before returning them
  //   var data=results.customerIDs.sort(function(a, b){return b-a});
  //   var customers= data.slice(0, 100);
  //   var res=[];
  //   for(var i=0;i<100;i++)
  //   {
  //     var id=customers[i]
  //     res.push({"id":id, "Data": "Customer"});
  //   }
  //     //return [{"id":1,"asd":customers, "res":res}];

  //   return res;

  //   });

  //previous trigger data ends there

  //new code starts here

  const currentYear = new Date().getFullYear();
  var date = currentYear + '-01-01';
  const options = {
    url: 'https://gregoryspest.pestroutes.com/api/customer/search',
    method: 'POST',
    headers: {},
    params: {
      authenticationToken: bundle.authData.authenticationToken,
      authenticationKey: bundle.authData.authenticationKey,
      dateAdded: '{"operator":">","value":"' + date + '"}',
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them
    var data = [];
    results.customerIDs.map(function (e) {
      data.push({ id: e, Object: 'Customer' });
      return e;
    });

    return data;
  });
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: false,
    sample: { id: 10687, Object: 'Customer' },
    outputFields: [{ key: 'id' }, { key: 'Object' }],
  },
  key: 'new_customer',
  noun: 'Customer',
  display: {
    label: 'New Customer',
    description: 'Trigger when a new customer is created',
    hidden: false,
    important: true,
  },
};
