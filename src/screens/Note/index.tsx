import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    NoteText,
    Buttons,
    Content,
    BackButton,
} from './styles';

import { Button } from '../../components/Button'

interface Props {
    singleNote: string;
}

interface Params {
    params: string;
}

export function Note() {
    const navigation = useNavigation();
    const routes = useRoute();
    const notes = routes.params as Params;

    console.log(routes, "pa")
    

    function handleDeleteNote() {
        return
    }

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
                <NoteText>{notes && notes.params}</NoteText>
            </Content>
            <Buttons>
                <Button
                    title='Deletar'
                    onPress={handleDeleteNote} />
            </Buttons>

        </Container>
    )
}