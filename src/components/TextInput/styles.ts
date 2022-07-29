import styled, {css} from 'styled-components/native';

interface Props {
    isFocused: boolean;
}

export const Container = styled.View<Props>`
    flex: 1;

    width: 90%;
    height: 60%;

    margin: 16px;
    padding: 8px;

    border-width: 1px;
    border-radius: 5px;
    border-color: #F2F4F4; 

    ${({ isFocused }) => isFocused && css`
    background-color: #7a9e9f;
  `};
`;

export const InputText = styled.TextInput<Props>`
    color: #000000;
    padding: 0 4px;


`;