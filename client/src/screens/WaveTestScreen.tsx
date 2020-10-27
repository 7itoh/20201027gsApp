import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// const db = firestore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#006948',
  },
  testContaint: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#004d25',
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 0.5,
  },
  testTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#a3d6cc',
  },
  getButtonContaint: {
    height: 42,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#3cb37a',
    marginTop: 80,
  },
  getButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a3d6cc',
  },
});

// type WaveProps = {
//   highBeta: number;
//   theta: number;
//   lowBeta: number;
//   highGamma: number;
//   highAlpha: number;
//   lowAlpha: number;
//   lowGamma: number;
//   delta: number;
// };

const WaveTest: React.FC = (props) => {
  // const [waves, setWaves] = useState<WaveProps[]>([]);

  // const getWavesItmes = async () => {
  //   const snapshot = await db.collection('newwaves').get();
  //   const snap = snapshot.docs.map((doc) => doc.data() as WaveProps);
  //   console.log(snap);
  //   setWaves(snap);
  //   // Linking.openURL('http://192.168.10.48:8000/cgi-bin/graph.py');
  // };

  // const waveItems = waves.map((wave, index) => (
  //   <View style={{margin: 10}} key={index.toString()}>
  //     <Text>theta: {wave.theta}</Text>
  //     <Text>delta: {wave.delta}</Text>
  //     <Text>highAlpha: {wave.highAlpha}</Text>
  //     <Text>lowAlpha: {wave.lowAlpha}</Text>
  //     <Text>highBeta: {wave.highBeta}</Text>
  //     <Text>lowBeta: {wave.lowBeta}</Text>
  //     <Text>highGamma: {wave.highGamma}</Text>
  //     <Text>lowGamma: {wave.lowGamma}</Text>
  //   </View>
  // ));

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.testContaint}>
          <Text style={styles.testTitle}>Brain Wave Test Page</Text>
        </View>
        <TouchableHighlight
          style={styles.getButtonContaint}
          // onPress={getWavesItmes}
          // onPress={() => props.navigation.navigate('ListDetail')}>
          onPress={() => props.navigation.navigate('GraphDetail')}>
          <Text style={styles.getButtonText}>Get Your Waves</Text>
        </TouchableHighlight>
        {/* {waveItems} */}
      </SafeAreaView>
    </>
  );
};

export default WaveTest;
