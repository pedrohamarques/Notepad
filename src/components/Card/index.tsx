import React from 'react';

import {
    Container,
    Content
} from './styles';

interface CardProps {
    data?: string;
    onPress: () => void;
    key: string;
}

export function Card({data, onPress, key} : CardProps){
    return (
        <Container onPress={onPress} key={key}>
            <Content>{data}</Content>
        </Container>
    );
}