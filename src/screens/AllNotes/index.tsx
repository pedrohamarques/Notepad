import React, { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Header,
    Title,
    CardList,
} from './styles';

import { Card } from '../../components/Card';

interface Props {
    value: string;
}

export function AllNotes() {
    const [notes, setNotes] = useState<Props[]>([]);
    const navigation = useNavigation();
    const dataKey = '@Notepad:notes';

    async function loadNotes() {
        try {
            const response = await AsyncStorage.getItem(dataKey);
            const notesUpdated = response ? JSON.parse(response) : [];
            setNotes(notesUpdated)
            console.log(notesUpdated, 'todas as notas');
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível carregar as anotações');
        }
    }

    function handleOpenCard() {
        return 
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

    console.log(notes, 'vida')

    return (
        <Container>
            <StatusBar />
            <Header>
                <Title>Anotações</Title>
            </Header>

            <CardList
                data={notes}
                renderItem={({ item }: any) => <Card data={item} onPress={handleOpenCard}/>}
                />


        </Container>
    )
}