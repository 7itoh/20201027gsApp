import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  headerContaint: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00331a',
  },
  headerTitle: {
    color: '#a3d6cc',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

const HeaderElement: React.FC = () => {
  return (
    <>
      <View style={styles.headerContaint}>
        <Text style={styles.headerTitle}>BrainWaveApp</Text>
      </View>
    </>
  );
};

export default HeaderElement;
