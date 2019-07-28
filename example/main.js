import XiXisys from 'xixisys-js-sdk'

// api key for test
const sdk = XiXisys('ivjvSXVHbz7Sk8R6tFLu36y3Gqvpv8AOa0OztMwM')

sdk.ComplianceHtml({
  id: '#compliance-html',
  cas: '115-07-1',
})

sdk.SdsHtml({
  id: '#sds-html',
  cas: '110-46-3',
  edition: 'cn',
})
