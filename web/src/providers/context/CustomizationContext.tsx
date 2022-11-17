import { createContext } from 'react'

type CustomizationContextType = {
  doubleSidedSkids: boolean
}

const defaultValue: CustomizationContextType = {
  doubleSidedSkids: process.env.SIDES_PER_SKID === '2',
}

const CustomizationContext =
  createContext<CustomizationContextType>(defaultValue)

const CustomizationProvider = ({ doubleSidedSkids = null, children }) => {
  const value = React.useMemo(
    () =>
      doubleSidedSkids !== null ? { doubleSidedSkids } : { ...defaultValue },
    [doubleSidedSkids]
  )

  return (
    <CustomizationContext.Provider value={value}>
      {children}
    </CustomizationContext.Provider>
  )
}

export { CustomizationContext, CustomizationProvider }
