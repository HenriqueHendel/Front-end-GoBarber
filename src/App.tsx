import React from 'react';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext'

const App: React.FC = ()=>{
  return (
    <>
      <AuthContext.Provider value={{name:"Diego"}}>
      <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  )
}

export default App;
