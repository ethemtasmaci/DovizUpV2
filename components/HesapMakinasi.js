
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Appbar } from 'react-native-paper';

import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import DonusturSvg from '../svg/DonusturSvg';
import Menu from './Menu';
import AnaMenu from './AnaMenu';

const HesapMakinasi = () => {
    const [input, setInput] = useState('');

    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        setMenuOpen(false); // Menüyü kapat
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    const handlePress = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <View style={{
            height: '100%',
            width: '100%',
            flex: 1,
            zIndex: 10,
            backgroundColor: '#476072',
        }}>

            <AnaMenu />

            <View style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.input}>{input}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text style={styles.buttonText}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('%')}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleClear}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress(',')}>
                        <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleCalculate()}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 40,
        backgroundColor: '#EEEEEE',
        height: 160,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    input: {
        color: '#000',
        fontSize: 42,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#334257',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 18,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 25,
    },
});

export default HesapMakinasi;
