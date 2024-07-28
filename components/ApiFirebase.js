import { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const fetchDataAndUpdateFirestore = async () => {
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

        // Firestore'da var olan belgeyi güncelleme veya yeni belge oluşturma
        const docRef = doc(db, "DovizApi", "dovizup_28012024_1");
        await setDoc(docRef, jsonData, { merge: true });
        console.log("Document updated or created with ID: ", docRef.id);
    } catch (error) {
        console.log("Veri çekerken hata oluştu veya Firestore'a kaydederken hata oluştu!", error);
    }
};

const ApiFirebaseDetay = () => {
    useEffect(() => {
        fetchDataAndUpdateFirestore(); // Component yüklendiğinde bir kez veri alıp Firestore'a kaydedecek

    }, []);

    return null; // Herhangi bir render içeriği olmadığı için null dönüyoruz
};

export default ApiFirebaseDetay;
