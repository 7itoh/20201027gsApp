import firebaseAuth from '@react-native-firebase/auth';
import firebaseStore from '@react-native-firebase/firestore';
import {initalUser, User} from '../types/user';

export const signin = async () => {
  const userCredential = await firebaseAuth().signInAnonymously();
  const {uid} = await userCredential.user;
  console.log(uid);
  const userDoc = await firebaseStore().collection('users').doc(uid).get();
  if (!userDoc.exists) {
    await firebaseStore().collection('users').doc(uid).set(initalUser);
    return {
      ...initalUser,
      id: uid,
    } as User;
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    } as User;
  }
};
