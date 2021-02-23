const authentication = require('./authentication');
const newCustomerTrigger = require('./triggers/new_customer.js');
const newAppointmentTrigger = require('./triggers/new_appointment.js');
const getCustomerDetailsCreate = require('./creates/get_customer_details.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [newCustomerTrigger.key]: newCustomerTrigger,
    [newAppointmentTrigger.key]: newAppointmentTrigger,
  },
  creates: { [getCustomerDetailsCreate.key]: getCustomerDetailsCreate },
};
