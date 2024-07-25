import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import app from './firebaseConfig';

import Anasayfa from './src/Anasayfa';
import Haberler from './src/Haberler';
import Alis from './src/Alis';
import Ayarlar from './src/Ayarlar';
import Iletisim from './src/Iletisim';
import Satis from './src/Satis';
import HaberDetay from './src/HaberDetay';
import Donustur from './src/Donustur';
import AdminHaber from './src/AdminHaber';
import AdminHaberDetay from './components/AdminHaberDetay';
import HaberEkle from './components/HaberEkle';
import AdminGiris from './src/AdminGiris';
import ApiFirebase from './components/ApiFirebase';
import ApiFirebaseDetay from './components/ApiFirebaseDetay';
import ApiFirebaseHaber from './components/ApiFirebaseHaber';
import HesapMakinasi from './components/HesapMakinasi';
import OnKisim1 from './src/OnKisim1';
import OnKisim2 from './src/OnKisim2';
import OnKisim3 from './src/OnKisim3';
import YanMenu from './components/YanMenu';
import YanMenuDetay from './components/YanMenuDetay';
import SikcaSorulanSorular from './components/SikcaSorulanSorular';
import Hakkimizda from './components/Hakkimizda';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      // SplashScreen.hide() çağrıldıktan 3 saniye sonra açılış ekranını gizle
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000); // 3000 milisaniye (3 saniye)
    }
  }, []);
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="OnKisim1"
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          >

            <Stack.Screen name="OnKisim1" component={OnKisim1} />
            <Stack.Screen name="OnKisim2" component={OnKisim2} />
            <Stack.Screen name="OnKisim3" component={OnKisim3} />
            
            <Stack.Screen name="YanMenu" component={YanMenu} />
            <Stack.Screen name="YanMenuDetay" component={YanMenuDetay} />
            <Stack.Screen name="SikcaSorulanSorular" component={SikcaSorulanSorular} />
            <Stack.Screen name="Hakkimizda" component={Hakkimizda} />

            <Stack.Screen name="Anasayfa" component={Anasayfa} />
            <Stack.Screen name="Satis" component={Satis} />
            <Stack.Screen name="Alis" component={Alis} />
            <Stack.Screen name="Haberler" component={Haberler} />
            <Stack.Screen name="HaberDetay" component={HaberDetay} />
            <Stack.Screen name="HesapMakinasi" component={HesapMakinasi} />

            <Stack.Screen name="Ayarlar" component={Ayarlar} />
            <Stack.Screen name="Iletisim" component={Iletisim} />
            <Stack.Screen name="Donustur" component={Donustur} />


            <Stack.Screen name="AdminHaber" component={AdminHaber} />
            <Stack.Screen name="AdminHaberDetay" component={AdminHaberDetay} />
            <Stack.Screen name="HaberEkle" component={HaberEkle} />
            <Stack.Screen name="AdminGiris" component={AdminGiris} />
            <Stack.Screen name="ApiFirebase" component={ApiFirebase} />
            <Stack.Screen name="ApiFirebaseDetay" component={ApiFirebaseDetay} />
            <Stack.Screen name="ApiFirebaseHaber" component={ApiFirebaseHaber} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;