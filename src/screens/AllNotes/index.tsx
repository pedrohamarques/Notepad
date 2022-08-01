import React, { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, FlatList, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Header,
    Title,
    CardList,
} from './styles';

import { Card } from '../../components/Card';

interface CardProps {
    value: string;
    keyID: string;
    location?: string;
}

export function AllNotes() {
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();
    const dataKey = '@Notepad:notes';

    async function loadNotes() {
        try {
            const response = await AsyncStorage.getItem(dataKey);
            const notesUpdated = response ? JSON.parse(response) : [];
            setNotes(notesUpdated)

        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível carregar as anotações');
        }
    }

    function handleOpenCard(card: string, keyID: string, latLocation: number, longLocation: number) {
        navigation.navigate("Anotacao", { note: card, keyNote: keyID, latLocation: latLocation, longLocation: longLocation })
    }

    useFocusEffect(useCallback(() => {
        loadNotes();
    }, []))

    //     useFocusEffect(useCallback(() => {
    //     async function removeAll() {
    //         const data = await AsyncStorage.removeItem(dataKey);
    //         console.log(data!);
    //     }
    //     removeAll();
    // },[]))


    return (
        <Container>
            <StatusBar />
            <Header>
                <Title>Anotações</Title>
            </Header>

            <CardList 
            data={notes}
            keyExtractor={item => item.keyID}
            renderItem={({ item }) => <Card data={item} onPress={() => handleOpenCard(item.note, item.keyID, item.latLocation, item.longLocation)} />}
            showsVerticalScrollIndicator={false}

            />
        </Container>
    )
}