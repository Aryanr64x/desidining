const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'gw2p60f8',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skCnTBPMQMdZxeU8Tozk3DrEv9sxmtnTKWjXqkIVSyXGsGIXW69sXYB14vIUlSDAaxkc3ZFVmkpIhyVKiHCMoWFwr73jphafDMSTyDXFyH4ySZfdZflx6cgyUXs1QDbE76gsa229clHh3uIpsFbr9fv4ADE9ENPWLodJPGfSCPTbJU9MH23m', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;