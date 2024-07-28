import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CarpiSvg from '../svg/CarpiSvg';

const Hakkimizda = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  return (
    <>
      <View style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
      }}>
        <View
          style={{
            marginLeft: 'auto',
            marginRight: 5,
            marginTop: 40,
            marginBottom: 40,
          }}>
          <TouchableOpacity onPress={() => handleMenuPress('YanMenuDetay')}>
            <CarpiSvg height={20} width={20} fill={'#fff'} />
          </TouchableOpacity>
        </View>

        <View style={{
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingLeft: 15
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Biz Kimiz?
          </Text>
          <Text style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,
            adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
            galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak
            kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
            değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
            içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
            gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur
          </Text>
          <Text style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,
            adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
            galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak
            kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
            değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
            içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
            gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur
          </Text>
          <Text style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Geliştirici: ietofficial
          </Text>
        </View>

      </View>
    </>
  )
}

export default Hakkimizda