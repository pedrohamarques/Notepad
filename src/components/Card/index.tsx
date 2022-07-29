import React from 'react';

import {
    Container,
    Content
} from './styles';

interface CardProps {
    data?: string;
    onPress: () => void;
}

export function Card({data, onPress} : CardProps){
    return (
        <Container onPress={onPress}>
            <Content>{data}</Content>
        </Container>
    );
}