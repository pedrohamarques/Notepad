import React, { useState, useEffect, useCallback } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const navigation = useNavigation();
    const dataKey = '@Notepad:notes';

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