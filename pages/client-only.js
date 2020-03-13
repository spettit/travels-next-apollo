import Header from '../components/Header'

import PostList from '../components/PostList'
import { withApollo } from '../apollo/apollo'

const ClientOnlyPage = props => (
  <div>
    <Header />
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
)

export default withApollo()(ClientOnlyPage)
