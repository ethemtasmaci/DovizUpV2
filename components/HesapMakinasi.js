import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AltMenu from './AltMenu';
import Menu from './Menu';

const HesapMakinasi = () => {
  const [display, setDisplay] = useState('0');

  const handlePress = value => {
    if (value === 'AC') {
      setDisplay('0');
    } else if (value === '=') {
      // Hesaplama işlemini burada yapabilirsiniz
      try {
        setDisplay(eval(display));
      } catch (e) {
        setDisplay('Hata');
      }
    } else {
      setDisplay(prev => (prev === '0' ? value : prev + value));
    }
  };

  const buttons = [
    ['AC', '½', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.calculatorContainer}>
        <Text style={styles.display}>{display}</Text>
        <View style={styles.buttonContainer}>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map(button => (
                <TouchableOpacity
                  key={button}
                  style={[
                    styles.button,
                    button === 'AC' || button === '½' || button === '%'
                      ? styles.specialButton
                      : {},
                    button === '=' ? styles.equalButton : {},
                    (button === '*' || button === '-' || button === '+'|| button === '/') ? styles.operationButton : {},
                  ]}
                  onPress={() => handlePress(button)}>
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
      <AltMenu renk={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D8D8D8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  display: {
    fontSize: 60,
    top: 20,
    marginBottom: -20,
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 40,
    color: '#000',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#333',
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  specialButton: {
    backgroundColor: '#E43A19',
  },
  equalButton: {
    backgroundColor: '#111F4D',
    flex: 2,
  },
  operationButton: {
    backgroundColor: '#111F4D',
  },
});

export default HesapMakinasi;
