import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Anasayfa from './src/Anasayfa';
import Haberler from './src/Haberler';
import Alis from './src/Alis';
import Satis from './src/Satis';
import HaberDetay from './src/HaberDetay';
import HesapMakinasi from './components/HesapMakinasi';
import OnKisim1 from './src/OnKisim1';
import OnKisim2 from './src/OnKisim2';
import OnKisim3 from './src/OnKisim3';
import YanMenu from './components/YanMenu';
import YanMenuDetay from './components/YanMenuDetay';
import SikcaSorulanSorular from './components/SikcaSorulanSorular';
import Hakkimizda from './components/Hakkimizda';
import NotificationManager from './NotificationManager';
import SorunBildir from './src/SorunBildir';

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkIntroSeen = async () => {
      const introSeen = await AsyncStorage.getItem('introSeen');
      if (introSeen) {
        setInitialRoute('Anasayfa');
      } else {
        setInitialRoute('OnKisim1');
      }
    };

    if (Platform.OS === "android") {
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    }

    checkIntroSeen();
  }, []);

  if (!initialRoute) {
    return null; // Veya bir yükleme ekranı gösterebilirsiniz
  }

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NotificationManager />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute}
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
            <Stack.Screen name="SorunBildir" component={SorunBildir} />

            <Stack.Screen name="Anasayfa" component={Anasayfa} />
            <Stack.Screen name="Satis" component={Satis} />
            <Stack.Screen name="Alis" component={Alis} />
            <Stack.Screen name="Haberler" component={Haberler} />
            <Stack.Screen name="HaberDetay" component={HaberDetay} />
            <Stack.Screen name="HesapMakinasi" component={HesapMakinasi} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
