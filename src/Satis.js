import { View, Text, Image, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';

const Satis = () => {
  const [alis, setAlis] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tlAmount, setTlAmount] = useState(''); // Kullanıcının girdiği TL miktarı
  const [calculatedValues, setCalculatedValues] = useState([]); // Hesaplanmış döviz değerleri

  useEffect(() => {
    handlePress();
  }, []);

  const handlePress = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.33:3030/api/fetch-data',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200 && response.data.success) {
        setAlis(response.data.data);
        setFilteredData(response.data.data); // Başlangıçta tüm veriler
        console.log('Gelen yanıt:', response.data);
      }
    } catch (error) {
      console.error('Veri çekilirken bir hata oluştu', error);
      Alert.alert('Hata', `Veri çekilirken bir hata oluştu: ${error.message}`);
    }
  };

  const calculateValues = (amount, data) => {
    const newValues = data.map((item) => {
      if (item.textBold) {
        const rateStr = item.textBold.slice(9, 17).trim().replace(',', '.'); // 7 ile 17 arasındaki karakterleri al
        const buyRate = parseFloat(rateStr);
        const convertedAmount = parseFloat(amount) / buyRate;
        return { ...item, convertedAmount: convertedAmount.toFixed(2) };
      }
      return item;
    });
    setCalculatedValues(newValues);
  };

  const handleTlChange = (text) => {
    setTlAmount(text);
    if (text === '') {
      setFilteredData(alis);
      setCalculatedValues([]);
    } else {
      calculateValues(text, alis);
    }
  };

  return (
    <View style={{ width: '100%', height: '100%', zIndex: 1 }}>
      <Menu />
      <View
        style={{
          width: '100%',
          height: '78.7%',
          backgroundColor: '#020205',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          opacity: 0.15,
        }}
      />
      <View
        style={{
          width: '100%',
          height: '78.7%',
          zIndex: 1000,
          position: 'absolute',
          marginTop: 100,
        }}>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{ width: '13.5%' }} />
          <Image
            style={{ width: '8%', height: 23, marginRight: 20 }}
            source={require('../img/turk.png')}
          />
          <Text
            style={{
              width: '45%',
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Türk Lirası
          </Text>
          <TextInput
            keyboardType="numeric"
            value={tlAmount}
            onChangeText={handleTlChange}
            style={{
              width: '20%',
              height: 40,
              color: '#000',
              borderColor: '#EA351D',
              backgroundColor: '#D9D9D9',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginLeft: 20,
            }}
          />
          <View style={{ width: '13.5%' }} />
        </View>
        <ScrollView>
          {tlAmount === '' ? (
            alis.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{ width: '13.5%' }} />
                <Image
                  style={{ width: '8%', height: 23, marginRight: 20 }}
                  source={{ uri: item.imgSrc }}
                />
                <Text
                  style={{
                    width: '45%',
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.cname}
                </Text>
                <Text
                  style={{
                    width: '20%',
                    fontSize: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginLeft: 20,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {item.textBold.slice(9, 17)}
                </Text>
                <View style={{ width: '13.5%' }} />
              </View>
            ))
          ) : (
            calculatedValues.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{ width: '13.5%' }} />
                <Image
                  style={{ width: '8%', height: 23, marginRight: 20 }}
                  source={{ uri: item.imgSrc }}
                />
                <Text
                  style={{
                    width: '45%',
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.cname}
                </Text>
                <Text
                  style={{
                    width: '20%',
                    fontSize: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginLeft: 20,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {item.convertedAmount}
                </Text>
                <View style={{ width: '13.5%' }} />
              </View>
            ))
          )}
        </ScrollView>
      </View>
      <AltMenu renk={1} />
    </View>
  );
};

export default Satis;