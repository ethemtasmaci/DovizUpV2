import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification'; // Push notifications for React Native
import axios from 'axios';

const NotificationManager = () => {
  useEffect(() => {
    // Bildirim kanalı oluşturma fonksiyonu
    const createNotificationChannel = () => {
      if (Platform.OS === 'android') {
        PushNotification.createChannel(
          {
            channelId: '2386', // Kanal ID'si
            channelName: 'Bildirime İzin Ver', // Kanal adı
            channelDescription: 'DovizUp Hakkında bildirim almak isterseniz lütfen aktif ediniz.', // Kanal açıklaması
            playSound: true, // Ses çalsın mı
            soundName: 'default', // Ses dosyası adı
            vibrate: true, // Titreşim
          },
          (created) => console.log(`Kanal oluşturuldu: ${created}`) // Kanal oluşturulduğunda log
        );
      }
    };

    // Bildirim kanalı oluştur
    createNotificationChannel();

    // Cihaz tokenını kaydet ve bildirimleri işleme
    const registerDeviceToken = async () => {
      try {
        // İzinleri talep et
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          const token = await messaging().getToken();
          console.log('Cihaz Tokenı:', token);

          await axios.post(
            'http://192.168.1.33:3030/api/device-tokens',
            { token },
            { headers: { 'Content-Type': 'application/json' } }
          );
          console.log('Token başarıyla gönderildi.');
        } else {
          Alert.alert(
            'Bildirim İzni Gerekli',
            'Bildirim gönderebilmek için uygulama izni vermeniz gerekiyor.',
            [{ text: 'Tamam' }]
          );
          console.log('İzin verilmedi.');
        }
      } catch (error) {
        console.log('Token alma hatası:', error);
      }
    };

    registerDeviceToken();

    // Foregroundda bildirim dinleyicisi
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Yeni FCM mesajı alındı!', remoteMessage);

      const { notification, data } = remoteMessage;
      const { title, body } = notification;
      const { imageUrl } = data || {};

      PushNotification.localNotification({
        channelId: '2386', // Burada oluşturduğunuz kanal ID'si
        title,
        message: body,
        largeIcon: imageUrl, // Eğer bir resim URL'si varsa
        bigPictureUrl: imageUrl, // Eğer büyük bir resim URL'si varsa
      });
    });

    // Background ve Killed durumları için bildirim dinleyicisi
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Backgroundta yeni FCM mesajı alındı!', remoteMessage);

      const { notification, data } = remoteMessage;
      const { title, body } = notification;
      const { imageUrl } = data || {};

      PushNotification.localNotification({
        channelId: '2386', // Burada oluşturduğunuz kanal ID'si
        title,
        message: body,
        largeIcon: imageUrl, // Eğer bir resim URL'si varsa
        bigPictureUrl: imageUrl, // Eğer büyük bir resim URL'si varsa
      });
    });

    // Cleanup on unmount
    return () => unsubscribeOnMessage();
  }, []);

  return null; // Bu komponent UI bileşeni olmadığından bir şey render etmiyor.
};

export default NotificationManager;
