import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    color: string;
}

export const Container = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #2874A6;

    margin: 4px;
    border-radius: 4px;

    height: 40px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 600;
`;