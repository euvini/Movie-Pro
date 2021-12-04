import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#111111', '#2E003B']
})`
    flex: 1;
`;

export const ListMovies = styled.FlatList`

`;