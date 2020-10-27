import {
  firebase,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export type User = {
  id?: string;
  name: string;
  updatedAt: FirebaseFirestoreTypes.Timestamp;
  createdAt: FirebaseFirestoreTypes.Timestamp;
};

export const initalUser: User = {
  name: '',
  updatedAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};
