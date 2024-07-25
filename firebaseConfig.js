import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, firestore } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCfjMmLLtapUAFnRs9I6rBNPwpwFNBlqhA",
  authDomain: "mobilyazilimapp.firebaseapp.com",
  projectId: "mobilyazilimapp",
  storageBucket: "mobilyazilimapp.appspot.com",
  messagingSenderId: "22270274812",
  appId: "1:22270274812:web:6280a1bcfef9740e6a3b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const storage = getStorage(app);

const uploadImageToFirebase = async (imageUri, imageName) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${imageName}`);
    await uploadBytes(storageRef, blob);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.error("Resim yükleme hatası:", error);
    throw error;
  }
};

const addHaberToFirestore = async (baslik, aciklama, resimUrl, zaman) => {
  try {
    const docRef = await addDoc(collection(db, 'haberler'), {
      baslik: baslik,
      aciklama: aciklama,
      resimUrl: resimUrl,
      zaman: zaman
    });
    console.log("Belge eklendi, belge kimliği:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Hata oluştu:", error);
    throw error;
  }
};

//Bitmedi 
export const deleteHaberFromFirestore = async (haberId) => {
  try {
    await firestore()
      .collection('haberler') // Haberler koleksiyonu
      .doc(haberId) // Silinecek haberin belirli dokümanı
      .delete(); // Silme işlemi
  } catch (error) {
    throw error; // Hata durumunda hatayı iletmek için fırlatma
  }
};

export { app, uploadImageToFirebase, addHaberToFirestore };
