import { createContext, useState } from "react"

export const gencontext = createContext();

const Context = ({children}) =>{
  const [value,setValue] = useState('');
    return <>
    <gencontext.Provider value={{
        value,setValue
    }}>
        {children}
    </gencontext.Provider>
    
    </>
}

export default Context