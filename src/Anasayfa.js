import { View, StatusBar } from 'react-native';
import React from 'react';

import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';
import InstaStorys from '../components/InstaStorys';
import AnasayfaDoviz from '../components/AnasayfaDoviz';
import AnasayfaHaber from '../components/AnasayfaHaber';

const Anasayfa = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
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
            zIndex: 1000,
            position: 'absolute',
            marginTop: 100,
          }}>
          <InstaStorys />
          <AnasayfaDoviz />
          <View
            style={{
              width: '80%',
              height: 2,
              backgroundColor: '#000',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 15,
            }}
          />
          <View
            style={{
              width: '80%',
              height: 2,
              backgroundColor: '#000',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 100,
              borderRadius: 15,
            }}
          />
          <AnasayfaHaber />
        </View>
        <AltMenu renk={3} />
      </View>
    </>
  );
};

export default Anasayfa;
