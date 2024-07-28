import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const AnasayfaHaber = () => {
  const navigation = useNavigation();
  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    handlePress();
  }, []);

  const handlePress = async () => {
    try {
      const response = await axios.get('http://192.168.1.33:3030/api/news', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setHaberler(response.data);
      console.log(response.data);
      if (response.status === 200 && response.data.success) {
        console.log('Gelen yanıt:', response.data);
        console.log('Status kodu:', response.status);
      }
    } catch (error) {
      console.error('Haber verisi çekilirken bir hata oluştu', error);
      Alert.alert(
        'Hata',
        `Haber verisi çekilirken bir hata oluştu: ${error.message}`,
      );
    }
  };

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {haberler.map((haber, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('HaberDetay', {veri: haber})}>
          <View style={styles.haberContainer}>
            <Image
              source={{uri: haber.resim}} // haber.resim yerine haber.resimUrl kullanın
              style={styles.image}
            />
            <Text style={styles.haberBaslik}>{haber.baslik}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50,
    paddingLeft: 20,
  },
  haberContainer: {
    width: 160,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    borderColor: '#E43A19',
    borderWidth: 1,
  },
  haberBaslik: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});

export default AnasayfaHaber;
