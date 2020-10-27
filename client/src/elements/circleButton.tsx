import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icons from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006948',
    width: '100%',
  },
  buttonContaint: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    height: 48,
    width: 48,
  },
  circleButton: {
    backgroundColor: '#177778',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 50,
    color: '#fff',
  },
});

type WaveProps = {
  highBeta: number;
  theta: number;
  lowBeta: number;
  highGamma: number;
  highAlpha: number;
  lowAlpha: number;
  lowGamma: number;
  delta: number;
};

const ListDetail: React.FC = (props) => {
  const [waves, setWaves] = useState<WaveProps[]>([]);

  useEffect(() => {
    getWaveItems();
  }, []);

  const getWaveItems = async () => {
    const snapshot = await firestore().collection('newwaves').get();
    const snap = snapshot.docs.map((doc) => doc.data() as WaveProps);
    setWaves(snap);
  };

  const waveItems = waves.map((wave, index) => (
    <View style={{margin: 10}} key={index.toString()}>
      <Text>theta: {wave.theta}</Text>
      <Text>delta: {wave.delta}</Text>
      <Text>highAlpha: {wave.highAlpha}</Text>
      <Text>lowAlpha: {wave.lowAlpha}</Text>
      <Text>highBeta: {wave.highBeta}</Text>
      <Text>lowBeta: {wave.lowBeta}</Text>
      <Text>highGamma: {wave.highGamma}</Text>
      <Text>lowGamma: {wave.lowGamma}</Text>
    </View>
  ));

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Data Detail</Text>
        </View>
        {waveItems}
        <TouchableOpacity
          style={styles.buttonContaint}
          onPress={() => props.navigation.navigate('User')}>
          <View style={styles.circleButton}>
            <Icons style={styles.circleButtonTitle} name="list" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default ListDetail;
