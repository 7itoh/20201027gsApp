import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Plotly from 'react-native-plotly';

const styles = StyleSheet.create({
  chartRow: {
    flex: 1,
    width: '100%',
  },
  container: {
    padding: 0,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
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

  const highAlpha = {
    type: 'scatter',
    mode: 'lines',
    name: 'alpha High',
    line: {color: '#ff4500'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.highAlpha;
    }),
  };

  const lowAlpha = {
    type: 'scatter',
    mode: 'lines',
    name: 'alpha low',
    line: {color: '#ffb499'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.lowAlpha;
    }),
  };

  const highBeta = {
    type: 'scatter',
    mode: 'lines',
    name: 'beta High',
    line: {color: '#18becf'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.highBeta;
    }),
  };

  const lowBeta = {
    type: 'scatter',
    mode: 'lines',
    name: 'beta low',
    line: {color: '#7f7f7f'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.lowBeta;
    }),
  };

  const highGamma = {
    type: 'scatter',
    mode: 'lines',
    name: 'gamma High',
    line: {color: '#ff00bb'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.highGamma;
    }),
  };

  const lowGamma = {
    type: 'scatter',
    mode: 'lines',
    name: 'gamma low',
    line: {color: '#ffccf1'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.lowGamma;
    }),
  };

  const delta = {
    type: 'scatter',
    mode: 'lines',
    name: 'theta',
    line: {color: '#bbff00'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.delta;
    }),
  };
  const theta = {
    type: 'scatter',
    mode: 'lines',
    name: 'theta',
    line: {color: '#4400ff'},
    x: [] = waves.map((wave, index) => {
      return index.toString();
    }),
    y: [] = waves.map((wave, index) => {
      return wave.theta;
    }),
  };

  const data = [
    theta,
    delta,
    highAlpha,
    lowAlpha,
    highBeta,
    lowBeta,
    highGamma,
    lowGamma,
  ];

  const layout = {
    title: 'Brain Waves Graph',
    width: 400,
    hight: 200,
  };

  let update = (_, {data, layout, config}, plotly) => {
    plotly.react(data, layout, config);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.chartRow}>
          <Plotly
            data={data}
            layout={layout}
            update={update}
            onLoad={() => console.log('loaded')}
            debug
            enableFullPlotly
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GraphDetail;
