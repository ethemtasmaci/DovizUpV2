import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import CarpiSvg from '../svg/CarpiSvg';
import { useNavigation } from '@react-navigation/native';

const SikcaSorulanSorular = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [height] = useState(new Animated.Value(0));

  const handleMenuPress = (screenName) => {
    setMenuOpen(false); // Menüyü kapat
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  const toggleSection = section => {
    Animated.timing(height, {
      toValue: activeSection === section ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
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

      <TouchableOpacity onPress={() => toggleSection(1)} style={styles.header}>
        <Text style={styles.headerText}>Döviz Kurları nerden geliyor?</Text>
      </TouchableOpacity>
      {activeSection === 1 && (
        <Animated.View style={[styles.content, { height }]}>
          <Text style={styles.contentText}>
            Döviz kurları, genellikle merkez bankaları, finansal piyasalar ve
            döviz borsaları tarafından belirlenir.
          </Text>
        </Animated.View>
      )}

      <TouchableOpacity onPress={() => toggleSection(2)} style={styles.header}>
        <Text style={styles.headerText}>Başka bir soru?</Text>
      </TouchableOpacity>
      {activeSection === 2 && (
        <Animated.View style={[styles.content, { height }]}>
          <Text style={styles.contentText}>
            Başka bir sorunun cevabı burada.
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    overflow: 'hidden',
    backgroundColor: '#555',
    padding: 15,
  },
  contentText: {
    color: '#fff',
  },
});

export default SikcaSorulanSorular;