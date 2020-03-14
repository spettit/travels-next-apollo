import Head from 'next/head'
import Cookies from 'js-cookie'

import './_app.css'
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import React, { useReducer, useEffect } from "react";

import AppContext from '../app/context'
import AppReducer from '../app/reducer'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  const [state, dispatch] = useReducer(AppReducer, {
    user: null,
  });
  useEffect(() => dispatch({type: "setUser", payload: Cookies.get('user')}), [])
 
  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <Head>
      <title>Sean's Travel Site</title>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAov8VpvRFBsCiFsB8pZIMa4P2NEP0qwcU&libraries=geometry"></script>
   
    </Head>
      <Component {...pageProps} />

    </AppContext.Provider>
    
  )
}