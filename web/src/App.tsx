import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import { CustomizationProvider } from 'src/providers/context/CustomizationContext'
import Routes from 'src/Routes'
import './i18n'

import '@fontsource-variable/comfortaa'
import '@fontsource-variable/libre-franklin'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <CustomizationProvider>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </CustomizationProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
