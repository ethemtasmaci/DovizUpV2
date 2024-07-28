import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import firebaseConfig from './firebaseConfig'; // Firebase yapılandırma dosyasını içe aktarın

// Firebase'i başlatın
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
