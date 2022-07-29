import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    color: string;
}

export const Container = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #4f6367;

    margin: 4px;
    border-radius: 4px;

    height: 40px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #eef5db;
    font-weight: 600;
`;