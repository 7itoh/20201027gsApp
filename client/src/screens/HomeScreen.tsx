import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from '../elements/Header';
import Profile from '../elements/Profile';
import ListTab from '../elements/ListTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006948',
  },
});

const App: React.FC = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <Profile />
        <ListTab
          title='Brain Waves "Click"'
          detailtext="Get Your Waves"
          onPress={() => console.log(navigation.navigate('WaveTest'))}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
