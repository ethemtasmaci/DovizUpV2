import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';

const HaberDetay = ({route}) => {
  const {veri} = route.params; // Gelen veriyi al
  console.log('veri', veri);

  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Menu />

        <Image
          source={{uri: veri.resim}} // veri.resim yerine veri.resimUrl
          style={styles.image}
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['20%', '30%', '40%', '85%', '100%']}
          initialSnapIndex={0}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.title}>{veri.baslik}</Text>
              <Text style={styles.bodyText}>{veri.aciklama}</Text>
              <Text style={styles.subtitle}>Haber Kaynağı</Text>
              <Text style={styles.source}>{veri.haberKaynagi}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(veri.haberKaynakUrl);
                }}>
                <Text style={styles.sources}>Haber Kaynağı</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheetModal>

        <AltMenu />
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '78.7%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    color: '#000',
    fontWeight: '700',
  },
  bodyText: {
    fontSize: 16,
    marginTop: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    fontWeight: '700',
  },
  source: {
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    fontWeight: '500',
  },
  sources: {
    fontSize: 20,
    marginTop: 20,
    color: '#ff0000',
    fontWeight: '500',
  },
});

export default HaberDetay;
