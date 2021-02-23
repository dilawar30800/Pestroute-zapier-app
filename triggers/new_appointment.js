const perform = (z, bundle) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  var currentDay = new Date().getDay();
  currentDay = currentDay - 1;
  var date = currentYear + '-' + currentMonth + '-' + currentDay;
  const options = {
    url: 'https://gregoryspest.pestroutes.com/api/appointment/search',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
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
    var appointmentIDs = results.appointmentIDs;
    var appointments = [];
    if (appointmentIDs.length > 0) {
      //call second function here;
    }

    //return res;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      params: {
        endpoint: 'appointment',
        action: '12500',
        authenticationToken:
          '9fc377b633193cec8447f4844208e7976a6c4babd25607dd5e3a1ec3fae001d5',
        authenticationKey:
          '282ddb1c9b311deefbc1e2ce9620aff12f6ebacdff83476c2bfb6b5eae461de7',
      },
      tokenUsage: {
        requestsReadToday: '85',
        requestsWriteToday: '0',
        requestsReadInLastMinute: '1',
        requestsWriteInLastMinute: '0',
      },
      tokenLimits: {
        limitReadRequestsPerMinute: 60,
        limitReadRequestsPerDay: 3000,
        limitWriteRequestsPerMinute: 60,
        limitWriteRequestsPerDay: 3000,
      },
      requestAction: '12500',
      endpoint: 'appointment',
      success: true,
      processingTime: '16 milliseconds',
      count: 1,
      appointment: {
        appointmentID: '12500',
        officeID: '1',
        customerID: '10728',
        subscriptionID: '-1',
        routeID: '601',
        spotID: '8096',
        date: '2021-02-16',
        start: '10:00:00',
        end: '12:00:00',
        duration: '25',
        type: '44',
        dateAdded: '2021-02-13 07:14:36',
        employeeID: '10001',
        status: '0',
        statusText: 'Pending',
        callAhead: '30',
        isInitial: '0',
        completedBy: null,
        servicedBy: null,
        dateCompleted: null,
        notes: null,
        officeNotes: null,
        timeIn: null,
        timeOut: null,
        windSpeed: null,
        windDirection: null,
        temperature: null,
        amountCollected: null,
        paymentMethod: null,
        servicedInterior: null,
        ticketID: '14166',
        dateCancelled: null,
        additionalTechs: null,
        appointmentNotes: 'See lead notes',
        doInterior: '0',
        dateUpdated: '2021-02-13 07:31:01',
        cancelledBy: null,
        unitIDs: [],
      },
      propertyName: 'appointment',
    },
    outputFields: [
      { key: 'params__endpoint' },
      { key: 'params__action' },
      { key: 'params__authenticationToken' },
      { key: 'params__authenticationKey' },
      { key: 'tokenUsage__requestsReadToday' },
      { key: 'tokenUsage__requestsWriteToday' },
      { key: 'tokenUsage__requestsReadInLastMinute' },
      { key: 'tokenUsage__requestsWriteInLastMinute' },
      { key: 'tokenLimits__limitReadRequestsPerMinute' },
      { key: 'tokenLimits__limitReadRequestsPerDay' },
      { key: 'tokenLimits__limitWriteRequestsPerMinute' },
      { key: 'tokenLimits__limitWriteRequestsPerDay' },
      { key: 'requestAction' },
      { key: 'endpoint' },
      { key: 'success' },
      { key: 'processingTime' },
      { key: 'count' },
      { key: 'appointment__appointmentID' },
      { key: 'appointment__officeID' },
      { key: 'appointment__customerID' },
      { key: 'appointment__subscriptionID' },
      { key: 'appointment__routeID' },
      { key: 'appointment__spotID' },
      { key: 'appointment__date' },
      { key: 'appointment__start' },
      { key: 'appointment__end' },
      { key: 'appointment__duration' },
      { key: 'appointment__type' },
      { key: 'appointment__dateAdded' },
      { key: 'appointment__employeeID' },
      { key: 'appointment__status' },
      { key: 'appointment__statusText' },
      { key: 'appointment__callAhead' },
      { key: 'appointment__isInitial' },
      { key: 'appointment__completedBy' },
      { key: 'appointment__servicedBy' },
      { key: 'appointment__dateCompleted' },
      { key: 'appointment__notes' },
      { key: 'appointment__officeNotes' },
      { key: 'appointment__timeIn' },
      { key: 'appointment__timeOut' },
      { key: 'appointment__windSpeed' },
      { key: 'appointment__windDirection' },
      { key: 'appointment__temperature' },
      { key: 'appointment__amountCollected' },
      { key: 'appointment__paymentMethod' },
      { key: 'appointment__servicedInterior' },
      { key: 'appointment__ticketID' },
      { key: 'appointment__dateCancelled' },
      { key: 'appointment__additionalTechs' },
      { key: 'appointment__appointmentNotes' },
      { key: 'appointment__doInterior' },
      { key: 'appointment__dateUpdated' },
      { key: 'appointment__cancelledBy' },
      { key: 'propertyName' },
    ],
  },
  key: 'new_appointment',
  noun: 'Appointment',
  display: {
    label: 'New Appointment',
    description: 'Triggers to get new appointment form pestroute.',
    hidden: false,
    important: true,
  },
};
