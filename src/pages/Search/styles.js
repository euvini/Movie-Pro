import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#F3A4CF', '#D09FD4']
})`
    flex: 1;
`;

export const ListMovies = styled.FlatList`

`;