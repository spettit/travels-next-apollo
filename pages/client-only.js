import Navbar from '../components/Navbar'
import {useRouter} from 'next/router'
import { useContext, useEffect } from 'react'

import AppContext from '../app/context';

import PostList from '../components/PostList'
import { withApollo } from '../apollo/apollo'

const ClientOnlyPage = props => {
  const {state} = useContext(AppContext)
  const Router = useRouter()
  // useEffect(() => {
  //   if(!state.user) {
  //     Router.push('/login')
  //   }
  // }, [])
 if(!state.user){
   return(<div>NO USER</div>)
 }
  
  return (
  <div>
    <Navbar />
    <div>
      ℹ️ This example shows how to disable apollos query fetching on the server.
      If you <a href="/client-only">reload</a> this page, you will see a loader
      since Apollo didn't fetch any data on the server. This allows{' '}
      <a
        href="https://nextjs.org/blog/next-9#automatic-static-optimization"
        target="_blank"
        rel="noopener noreferrer"
      >
        automatic static optimization
      </a>
      .
    </div>
    <PostList />
  </div>
)}

export default withApollo()(ClientOnlyPage)
