import { useEffect } from 'react';
import { Alert } from'react-native';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const fetchDataAndUpdateFirestore = async () => {
  try {
    // Firestore'da "haberler" koleksiyonuna veriyi eklemek için referans oluştur
    const haberRef = collection(db, 'haberler');

    // Sunucudan haberleri al
    const response = await fetch("http://10.110.4.29:3030/api/haberler", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Sunucudan başarılı bir yanıt alınamadı.');
    }
    const jsonData = await response.json();
    console.log("Yeni haber detay", jsonData);

    // Mevcut haber verilerini al
    const snapshot = await getDocs(haberRef);
    const existingData = snapshot.docs.map(doc => doc.data());

    // Yeni gelen verileri filtrele
    const yeniVeriler = jsonData.baslik.filter((baslik, index) => {
      return !existingData.some(veri => veri.veriler.baslik === baslik);
    }).map((baslik, index) => {
      return {
        id: (existingData.length + index).toString(), // Yeni id oluştur
        aciklama: jsonData.aciklama[index],
        baslik: baslik,
        img: jsonData.img[index],
        zaman: jsonData.zaman[index]
      };
    });

    // Yeni verileri Firestore'a kaydet
    if (yeniVeriler.length > 0) {
      // Her yeni veri için yeni bir Firestore belgesi oluştur
      await Promise.all(yeniVeriler.map(async ({ id, ...veri }) => {
        await addDoc(haberRef, { id, veriler: veri });
      }));
      console.log("Yeni veriler Firebase Firestore'a başarıyla kaydedildi.");
      Alert.alert("Yeni veriler Firebase Firestore'a başarıyla kaydedildi.");
    } else {
      console.log("Yeni veri bulunamadı, kaydedilecek veri yok.");
      Alert.alert("Yeni veri bulunamadı, kaydedilecek veri yok.");
    }
  } catch (error) {
    console.error("Veri çekerken hata oluştu veya Firestore'a kaydederken hata oluştu!", error);
  }
};



const ApiFirebaseHaber = () => {
  useEffect(() => {
    fetchDataAndUpdateFirestore();
  }, []);

  return null;
};

export default ApiFirebaseHaber;
