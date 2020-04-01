
import { withApollo } from '../apollo/apollo'
import { Button } from "@blueprintjs/core";
import { useContext } from 'react'

import Navbar from '../components/Navbar'
import Map from '../components/Map'
import AppContext from '../app/context';




const IndexPage = () => {
  const {state, dispatch} = useContext(AppContext)
  return(
  <div>
    
    <Navbar />
   <h1>Travel Maps</h1>
   <Map />
   <Button text='login' onClick={() => dispatch({type: "setUser", payload: "new puser"})} />
   <Button text='logout' onClick={() => dispatch({type: "signout"})} />
  </div>
)
}

export default withApollo({ ssr: true })(IndexPage)
