import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

/* navigation */
import HomeStackNavi from '../navigations/MaintTabNavi';
import AuthStackNavi from '../navigations/AuthStackNavi';

/* contexts */
import {UserContext} from '../contexts/userContexts';

const AppNavi: React.FC = () => {
  // const user = null;
  // const user = {id: '123'};
  const user = useContext(UserContext);

  return (
    <>
      <NavigationContainer>
        {!user ? <AuthStackNavi /> : <HomeStackNavi />}
      </NavigationContainer>
    </>
  );
};

export default AppNavi;
