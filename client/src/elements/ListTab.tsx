import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    borderBottomColor: '#ddd',
    borderWidth: 0.5,
    paddingTop: 20,
    paddingLeft: 15,
    backgroundColor: '#00533f',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#a3d6cc',
    paddingBottom: 10,
  },
  listText: {
    fontSize: 18,
    color: '#ffe866',
  },
});

type listTabProps = {
  title: string;
  detailtext: string;
  onPress: () => void;
};

const ListTab: React.FC<listTabProps> = (props: listTabProps) => {
  const {title, detailtext, onPress} = props;

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listText}>{detailtext}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListTab;
