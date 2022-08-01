import React, { useCallback, useState }  from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, StatusBar } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Header,
    Title,
    NoteText,
    Buttons,
    Content,
    BackButton,
    LocationView,
    LocationText,
} from './styles';

import { Button } from '../../components/Button'

interface Params {
    note: string,
    keyNote: string,
    latLocation: number,
    longLocation: number,
}

export function Note() {
    const [notes, setNotes] = useState([])
    const navigation = useNavigation();
    const routes = useRoute();
    const { keyNote, note, latLocation, longLocation } = routes.params as Params;
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

    async function handleDeleteNote() {
        const newNotes = notes.filter(({keyID}) => keyID !== keyNote)
        await AsyncStorage.setItem(dataKey, JSON.stringify(newNotes))
        .then(() => navigation.navigate('Todas as Notas'));
    }

    useFocusEffect(useCallback(() => {
        loadNotes()
    },[]))

    return (
        <Container>
            <StatusBar />
            <Header>
                <BackButton onPress={() => navigation.navigate('Todas as Notas')}>
                    <MaterialIcons 
                        name='chevron-left'
                        size={40}
                        color='#eef5db'
                    />
                </BackButton>
                <Title>Nota</Title>
            </Header>

            <Content>
                <NoteText>{note}</NoteText>
            </Content>

            <LocationView>
                <MaterialIcons name='map' size={24} style={{color: "#7B7D7D"}}/>
                <LocationText>{latLocation} , {longLocation}</LocationText>
            </LocationView>

            <Buttons>
                <Button
                    title='Deletar'
                    onPress={() => handleDeleteNote()} />
            </Buttons>

        </Container>
    )
}