import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Header,
    Content,
    Location,
    Footer,
    SeeAll,
    Text
} from './styles';

interface CardProps extends TouchableOpacityProps {
    data: {
        note: string;
        latLocation?: string;
        longLocation?: string;
    }
}

export function Card({ data, ...rest }: CardProps) {
    return (
        <Container >
            <Header>
                <Content
                    numberOfLines={1}
                >{data.note}</Content>
            </Header>
            <Footer>
                <Location>{data.latLocation}, {data.longLocation}</Location>
                <SeeAll {...rest}>
                    <Text>Ver mais</Text>
                    <MaterialIcons name='chevron-right' size={24} style={{ color: "#2874A6" }} />
                </SeeAll>
            </Footer>
        </Container>
    )
}