import {View, Text, Image} from 'react-native';
import React from 'react';

const AnasayfaDoviz = () => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 250,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '95%',
            height: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20,
            justifyContent: 'space-between',
            marginLeft:'auto',
          }}>
          {[
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
            'ABD Doları',
          ].map((item, index) => (
            <View
              key={index}
              style={{
                width: '24%',
                height: 85,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#F93939',
                backgroundColor: '#D9D9D9',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
                source={require('../img/abd.png')}
              />
              <Text style={{color: '#000', fontSize: 16}}>{item}</Text>
              <Text style={{color: '#000', fontSize: 14}}>30.000TL</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default AnasayfaDoviz;
