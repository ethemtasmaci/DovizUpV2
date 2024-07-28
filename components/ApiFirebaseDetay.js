import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import Svg, { SvgUri } from 'react-native-svg';


const ApiFirebaseDetay = () => {
  const [firstFiveData, setFirstFiveData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.110.4.29:3030/api/data", {
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

        // İlk 5 veriyi al
        const firstFive = {
          kurIsim: jsonData.kurIsim.slice(0, 5),
          bayraklar: jsonData.bayraklar.slice(0, 5),
          alis: jsonData.alis.slice(0, 5),
          satis: jsonData.satis.slice(0, 5)
        };

        setFirstFiveData(firstFive);

        // Firestore'da var olan belgeyi güncelleme veya yeni belge oluşturma
        const docRef = doc(db, "DovizApi", "dovizup_28012024");
        await setDoc(docRef, firstFive, { merge: true });
        console.log("Document updated or created with ID: ", docRef.id);
      } catch (error) {
        console.log("Veri çekerken hata oluştu veya Firestore'a kaydederken hata oluştu!", error);
      }
    };

    fetchData();
  }, []);

  return (
   <View>
   </View>
  );
}

export default ApiFirebaseDetay;
