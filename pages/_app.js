import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import Sidebar from './components/utils/sidebar'
import Content from './components/utils/content'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Sidebar/>
      <Content>
        <Component {...pageProps} />
      </Content>
    </main>
  )
}

export default MyApp
