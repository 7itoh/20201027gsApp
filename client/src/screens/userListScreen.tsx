import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006948',
  },
  listContaint: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#b1dec0',
    paddingLeft: 15,
    borderColor: '#3c664a',
    borderWidth: 0.8,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listDate: {
    fontSize: 14,
  },
});

const UserList: React.FC = (props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity　style={styles.listContaint} onPress={() => props.navigation.navigate('GraphDetail')}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listContaint} onPress={() => props.navigation.navigate('ListDetail')}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </TouchableOpacity>
        <View style={styles.listContaint}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </View>
        <View style={styles.listContaint}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </View>
        <View style={styles.listContaint}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </View>
        <View style={styles.listContaint}>
          <Text style={styles.listTitle}>UserList</Text>
          <Text style={styles.listDate}>Date</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UserList;
