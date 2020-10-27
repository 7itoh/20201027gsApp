import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Plotly from 'react-native-plotly';
import firestore from '@react-native-firebase/firestore';
const db = firestore();

/* axis */
let axisX = [1, 3, 5, 7];

/* alpha */
let alphaHigh = [4, 7, 9, 8];
let alphaLow = [3.5, 6.7, 8.8, 7.9];

/* beta */
let betaHigh = [3, 5, 2, 10];
let betaLow = [2.9, 4.4, 1.9, 9.5];

/* gamma */
let gammaHigh = [6, 4, 7, 9];
let gammaLow = [5.9, 3.8, 6.9, 8.8];

/* delta */
let deltA = [8, 6, 7, 5];

/* theta */
let thetA = [4, 5, 8, 3];

const highAlpha = {
  type: 'scatter',
  mode: 'lines',
  name: 'alpha High',
  line: {color: '#ff4500'},
  x: [] = axisX,
  y: [] = alphaHigh,
};

const lowAlpha = {
  type: 'scatter',
  mode: 'lines',
  name: 'alpha low',
  line: {color: '#ffb499'},
  x: [] = axisX,
  y: [] = alphaLow,
};

const highBeta = {
  type: 'scatter',
  mode: 'lines',
  name: 'beta High',
  line: {color: '#18becf'},
  x: [] = axisX,
  y: [] = betaHigh,
};

const lowBeta = {
  type: 'scatter',
  mode: 'lines',
  name: 'beta low',
  line: {color: '#7f7f7f'},
  x: [] = axisX,
  y: [] = betaLow,
};

const highGamma = {
  type: 'scatter',
  mode: 'lines',
  name: 'gamma High',
  line: {color: '#ff00bb'},
  x: [] = axisX,
  y: [] = gammaHigh,
};

const lowGamma = {
  type: 'scatter',
  mode: 'lines',
  name: 'gamma low',
  line: {color: '#ffccf1'},
  x: [] = axisX,
  y: [] = gammaLow,
};

const delta = {
  type: 'scatter',
  mode: 'lines',
  name: 'delta',
  line: {color: '#bbff00'},
  x: [] = axisX,
  y: [] = deltA,
};

const theta = {
  type: 'scatter',
  mode: 'lines',
  name: 'theta',
  line: {color: '#4400ff'},
  x: [] = axisX,
  y: [] = thetA,
};

export default class Graph extends React.Component {
  state = {
    data: [
      highAlpha,
      lowAlpha,
      highBeta,
      lowBeta,
      highGamma,
      lowGamma,
      theta,
      delta,
    ],
    layout: {
      title: 'Brain Waves Graph',
      width: 400,
      hight: 200,
    },
  };

  update = (_, {data, layout, config}, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.chartRow}>
          <Plotly
            data={this.state.data}
            layout={this.state.layout}
            update={this.update}
            onLoad={() => console.log('loaded')}
            debug
            enableFullPlotly
          />
        </View>
      </SafeAreaView>
    );
  }
}

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
