import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';

// import FiltreSvg from '../svg/FiltreSvg';
import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import AnaMenu from '../components/AnaMenu';

const Hakkinda = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#476072',
      }}>
        <AnaMenu />
        <View style={{
          backgroundColor: '#334257',
          height: '80%',
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 10,
          marginTop: 50
        }}>

          <View>
            <Image
              style={{
                height: 70,
                width: 170,
                borderRadius: 12,
                marginTop: 50,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              source={require('../img/logokucuk2.png')}
            />
            <Text style={{
              color: '#EEEEEE',
              marginTop: 30,
              marginBottom: 20,
              fontSize: 21,
              fontWeight: '700',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',

            }}>Döviz Up Nedir?</Text>
            <Text style={{
              color: '#fff',
              width: '80%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>

              DövizUp, kullanıcılarına en güncel teknoloji ve modern tasarımıyla geliştirilmiş bir platform sunar. Öncelikle,
              hızlı döviz takibi sağlayarak kullanıcıların anlık olarak piyasa hareketlerini takip etmelerine olanak tanır.
              Ayrıca, çeşitli hesaplama araçlarıyla kullanıcıların döviz kurlarını anlık olarak hesaplamalarına yardımcı olur.
              Veri güvenliği konusunda da ön planda olan DövizUp ve gizliliğini korur. Son olarak, güncel haberler bölümüyle kullanıcılarına döviz piyasalarıyla ilgili en son
              gelişmeleri sunar, böylece kullanıcılar her zaman bilgiye erişebilir ve doğru yatırım kararları alabilirler.
              Bu özellikleriyle DövizUp, kullanıcılarına kapsamlı bir döviz deneyimi sunar ve döviz piyasalarında güvenle
              işlem yapmalarını sağlar.

            </Text>

            <Text style={{
              color: '#EEEEEE',
              marginTop: 70,
              fontSize: 17,
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              version: 1.1v
            </Text>

          </View>

        </View>
      </View>
    </View>
  )
}

export default Hakkinda