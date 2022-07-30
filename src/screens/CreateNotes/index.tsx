import React, { useState, useEffect, useCallback } from 'react';
import { Alert, PermissionsAndroid, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

import {
    Container,
    Header,
    Title,
    Buttons,
} from './styles';

import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export function CreateNote() {
    const [note, setNote] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState('');
    const [currentLongitude, setCurrentLongitude] = useState('');
    const navigation = useNavigation();
    const dataKey = '@Notepad:notes';

    function callLocation () {
        if (Platform.OS === 'ios') {
            getLocation();
        } else {
            async function requestLocationPermission () {
                const granted = await PermissionsAndroid.request(
                    'android.permission.ACCESS_FINE_LOCATION',
                    {
                        title: 'Permissão de Acesso à Localização',
                        message: 'Este aplicativo precisa acessar a sua localização',
                        buttonNeutral: 'Pergunte-me depois',
                        buttonNegative: 'Cancelar',
                        buttonPositive: 'Permitir'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getLocation();
                } else {
                    Alert.alert('Permissão de localização negada');
                }
            };
            requestLocationPermission();
        }
    }

    function getLocation () {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLatitude = JSON.stringify(position.coords.latitude);
                const currentLongitude = JSON.stringify(position.coords.longitude);
                setCurrentLatitude(currentLatitude);
                setCurrentLongitude(currentLongitude);
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
    
    async function handleSaveNote() {
        try {
            const data = await AsyncStorage.getItem(dataKey);
            const allNotes = data ? JSON.parse(data) : [];

            const allNotesUpdated = [
                ...allNotes, note
        ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(allNotesUpdated))
            .then(() => navigation.navigate('Todas as Notas'));
            setNote('');

        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possível salvar a anotação')
        }
    }

    function handleCleanNote() {
        setNote('');
    }

    // useFocusEffect(useCallback(() => {
    //     async function removeAll() {
    //         const data = await AsyncStorage.removeItem(dataKey);
    //         console.log(data!);
    //     }
    //     removeAll();
    //     setNote('');
    // },[]))


    return (
        <Container>
            <StatusBar />
            <Header>
                <Title>Criar Anotação</Title>
            </Header>

            <TextInput
                placeholder='Insira a sua anotação...'
                keyboardType='default'
                multiline={true}
                value={note}
                onChangeText={setNote}
                style={{ fontSize: 18 }}
                autoFocus
                selectionColor='#eef5db'

            />

            <Buttons>
                <Button
                    title='Limpar'
                    onPress={() => handleCleanNote()} />
                <Button
                    title='Salvar'
                    onPress={() => handleSaveNote()}
                    disabled={note === '' ? true : false} />
            </Buttons>
        </Container>
    )
}