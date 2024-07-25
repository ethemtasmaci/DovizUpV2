import React, { useRef, useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const HaberDetay = ({ route }) => {
  const { veri } = route.params;
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Menu />
        <Image style={styles.image} source={require('../img/haberlerdenemeimg.png')} />
        <AltMenu />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Başlık</Text>
            <Text style={styles.description}>Açıklama</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '78.7%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  bottomSheet: {
    zIndex: 1000,
    position: 'absolute',
    width: '100%',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    color: '#000',
    fontSize: 22,
  },
  description: {
    color: '#000',
    fontSize: 16,
  },
});

export default HaberDetay;