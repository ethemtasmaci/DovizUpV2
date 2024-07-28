import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';


const HaberEkle = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSave, setisSave] = useState(false);
  const [isDate, setIsDate] = useState([]);
  const navigation = useNavigation();

  console.log("Veriler", isDate)

  useEffect(() => {
    postdate()
  }, [isSave])

  //Firebase ile veriyi ekleme
  const getdate = async () => {
    try {
      const docRef = await addDoc(collection(db, "blog"), {
        baslik: "react ",
        aciklama: "native",
        zaman: 2005
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const handleMenuPress = (screenName) => {
    setMenuOpen(false); // Menüyü kapat
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  //Veriyi çekme

  const postdate = async () => {
    const alldate = []
    try {
      const querySnapshot = await getDocs(collection(db, "blog"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`); Bu kod verinin türünü gösteriyor Object veya başka bi şey dönebiliyor ona göre hareket edebiliyoruz
        // setIsDate([...isDate, doc.data()])
        alldate.push(doc.data())
      });
      setIsDate(alldate)
    } catch (error) {

    }
  }

  //Veriyi Silme
  const deleteDate = async () => {
    try {
      await deleteDoc(doc(db, "blog", "9VmFLQfFofiejrEqV2E3"));
    } catch (error) {
      console.log(error)
    }
  }

  //Veriyi güncelleme
  const update = async () => {
    try {
      const updateozellik = doc(db, "blog", "JCPDwNJuJe57Wxxejt7K");

      // Set the "capital" field of the city 'DC'
      await updateDoc(updateozellik, {
        aciklama: 'Deneme'
      });
      console.log("veri yenilendi", updateozellik)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#161A30'
    }}>
      {isDate.map((value, index) => {
        return (
          <View key={index}>
            <Text style={{ color: '#fff' }}>{index}</Text>
            <Text style={{ color: '#fff' }}>{value.baslik}</Text>
            <Text style={{ color: '#fff' }}>{value.aciklama}</Text>
            <Text style={{ color: '#fff' }}>{value.zaman}</Text>
          </View>
        )
      })}

      <Text style={{
        marginTop: 200,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}
      >Deneme</Text>
      <Pressable
        style={{
          backgroundColor: '#000',
          height: 50,
          width: 150,
          borderRadius: 20,
          marginLeft: 128,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => { getdate(), setisSave(isSave === false ? true : false) }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Veriyi Gönder</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#000',
          height: 50,
          width: 150,
          marginTop: 20,
          borderRadius: 20,
          marginLeft: 128,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => postdate()}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Veriyi Oku</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#000',
          height: 50,
          width: 150,
          marginTop: 20,
          borderRadius: 20,
          marginLeft: 128,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => update()}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Veriyi Güncelle</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#000',
          height: 50,
          width: 150,
          marginTop: 20,
          borderRadius: 20,
          marginLeft: 128,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => deleteDate()}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Veriyi Sil</Text>
      </Pressable>

      <Text onPress={() => handleMenuPress('Anasayfa')} style={{
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}>Anasyafaya git</Text>
    </View>
  )
}

export default HaberEkle