import XiXisys from 'xixisys-js-sdk'

// api key for test
const sdk = XiXisys(process.env.API_KEY)

sdk.ComplianceHtml({
  id: '#compliance-html',
  cas: '115-07-1',
  success: () => {
    console.log('aka')
    document.querySelector('#loading').remove()
  }
})

sdk.SdsHtml({
  id: '#sds-html',
  cas: '110-46-3',
  edition: 'cn',
  success: () => {
    document.querySelector('#loading').remove()
  }
})
