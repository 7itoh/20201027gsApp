import React, {useState} from 'react';
import AppNavi from './navigations/AppNavi';
import {UserContext} from './contexts/userContexts';
import {User} from './types/user';

const App: React.FC = () => {
  const [user, setUser] = useState<User>();
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <AppNavi />
      </UserContext.Provider>
    </>
  );
};

export default App;
