import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

export function Note({ singleNote }: Props) {
    const navigation = useNavigation();
    

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
                <NoteText>{singleNote}</NoteText>
            </Content>
            <Buttons>
                <Button
                    title='Deletar'
                    onPress={handleDeleteNote} />
            </Buttons>

        </Container>
    )
}