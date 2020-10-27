import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  profileContaint: {
    height: 150,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 0.25,
    flexDirection: 'row',
  },
  leftCotaint: {
    width: 150,
  },
  rightContaint: {
    backgroundColor: '#316745',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  leftImage: {
    height: 150,
    width: 150,
  },
  rightText1: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  rightText2: {
    fontSize: 20,
  },
});

const Profile: React.FC = () => {
  return (
    <>
      <View style={styles.profileContaint}>
        <View style={styles.leftCotaint}>
          <Image
            style={styles.leftImage}
            source={{uri: 'https://picsum.photos/id/306/200/200'}}
          />
        </View>
        <View style={styles.rightContaint}>
          <Text style={styles.rightText1}>Profile Name</Text>
          <Text style={styles.rightText2}>Profile ID</Text>
        </View>
      </View>
    </>
  );
};

export default Profile;
