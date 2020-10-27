import React, {useEffect, useContext} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator, Text} from 'react-native';
import {signin} from '../types/firebase';
import {UserContext} from '../contexts/userContexts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadText: {
    fontSize: 26,
  },
});

const AuthScreen: React.FC = () => {
  const {setUser} = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      setUser(user);
      // console.log(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadText}>...Loding check your Account</Text>
      </SafeAreaView>
    </>
  );
};

export default AuthScreen;
