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
import { ScrollView } from 'react-native-gesture-handler';

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

        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível carregar as anotações');
        }
    }

    function handleOpenCard(card : string) {
        navigation.navigate("Anotacao", {params: card})
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
            <ScrollView>
                <CardList>
                    { notes && notes.length && notes.map(item => (
                        <>
                        <Card data={item} onPress={() => handleOpenCard(item)} key={item} />
                        </>
                    ))}
                </CardList>
                </ScrollView>

        </Container>
    )
}