import React, { useState, useCallback } from 'react';
import { Alert, PermissionsAndroid, Platform, StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

interface GeoLocalProps {
    coords: {
        accuracy: number,
        altitude: number,
        altitudeAccuracy: number,
        heading: number,
        latitude: number,
        longitude: number,
        speed: number,
    },
    mocked: boolean,
    timestamp: number,
}

import {
    Container,
    Header,
    Title,
    Buttons,
    LocationView,
    LocationText
} from './styles';

import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

interface Props {
    key: string;
    value: string;
}

export function CreateNote() {
    const [note, setNote] = useState('');
    const [location, setLocation] = useState<GeoLocalProps>();
    const [errorMsg, setErrorMsg] = useState(null);
    const navigation = useNavigation();
    const dataKey = '@Notepad:notes';

    const noteWithKey = {
        note,
        keyID: String(uuid.v4()),
        latLocation: location?.coords.latitude,
        longLocation:location?.coords.longitude,
    }


    async function handleSaveNote() {
        try {

            const data = await AsyncStorage.getItem(dataKey);
            const allNotes = data ? JSON.parse(data) : [];

            const allNotesUpdated = [
                ...allNotes, noteWithKey
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

    useFocusEffect(useCallback(() => {
        async function getLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg('Permissão de localização negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
        getLocation();
    }, []))

    let text = 'Aguardando..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


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

            />
            <LocationView>
                <MaterialIcons name='map' size={24} style={{color: "#7B7D7D"}}/>
                <LocationText>{location?.coords.latitude} , {location?.coords.longitude}</LocationText>
            </LocationView>

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