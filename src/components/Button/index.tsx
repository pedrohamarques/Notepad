import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title,
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export function Button({title, onPress, disabled, ...rest} : ButtonProps ){
    return (
        <Container 
        onPress={onPress} 
        disabled={disabled}
        style={{ opacity: disabled ? .5 : 1}}
        {...rest}
        >
            <Title>{title}</Title>
        </Container>
    );
}