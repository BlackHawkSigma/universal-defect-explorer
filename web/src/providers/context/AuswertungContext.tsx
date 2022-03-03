import { createContext } from 'react'

type AuswertungContextType = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const defaultValue: AuswertungContextType = {
  isLoading: false,
  setIsLoading: () => {},
}

const AuswertungContext = createContext<AuswertungContextType>(defaultValue)

const AuswertungContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <AuswertungContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AuswertungContext.Provider>
  )
}

export { AuswertungContext, AuswertungContextProvider }
