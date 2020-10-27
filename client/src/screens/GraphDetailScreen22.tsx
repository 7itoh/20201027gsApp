import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006948',
    width: '100%',
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

const GraphDetail: React.FC = () => {
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
      </SafeAreaView>
    </>
  );
};

export default GraphDetail;
