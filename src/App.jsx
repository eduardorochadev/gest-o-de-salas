import { createContext, useState } from "react";
import { Ways } from "./Routes";

export const LoginContext = createContext(null);

const App = () => {

  const [logado, setLogado] = useState(false)

  return(
    <>
      <LoginContext.Provider value={{logado, setLogado}}>
          <Ways />
      </LoginContext.Provider>   
    </>
  )
}

export default App;