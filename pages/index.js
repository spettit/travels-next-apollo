import Head from 'next/head'
import { withApollo } from '../apollo/apollo'

import Navbar from '../components/Navbar'
import Map from '../components/map'




const IndexPage = () => (
  <div>
    <Head>
      <title>Sean's Travel Site</title>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAov8VpvRFBsCiFsB8pZIMa4P2NEP0qwcU&libraries=geometry"></script>
   
    </Head>
    <Navbar />
   <h1>Travel Maps</h1>
   <Map />
  </div>
)

export default withApollo({ ssr: true })(IndexPage)
