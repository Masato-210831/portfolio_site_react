import { createContext, useContext } from "react";

const navItemsList = ["Home", "About", "Works", "Products"];
const NavItemsContext = createContext()

// App.jsxで囲む
export const NavItemsProvider = ({children}) => {
  return (
    <NavItemsContext.Provider value={navItemsList}>
      {children}
    </NavItemsContext.Provider>
  )
}

// 他のコンポーネントで使用する
export const useNavItems = () => useContext(NavItemsContext)