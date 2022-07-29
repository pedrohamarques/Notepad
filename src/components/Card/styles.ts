import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    width: 180px;
    height: 150px;

    border-width: 1px;
    border-radius: 8px;
    border-color: #4f6367;

    margin: 4px;

    padding: 4px 4px 4px 8px;
`;

export const Content = styled.Text`
    font-size: 14px;
    font-weight: 500;
`;