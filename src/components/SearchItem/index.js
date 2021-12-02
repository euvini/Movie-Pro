import React from "react";
import { Container, Banner, Title, RateContainer, Rate } from "./styles";
import { Ionicons } from '@expo/vector-icons'

export default function SearchItem({ data, navigatePage }) {

    function DetailMovie(){
        if(data.release_date === ''){
            alert('Filme ainda sem data');
            return;
        }

        navigatePage(data);
    }

    return (
        <Container activeOpacity={0.7} onPress={DetailMovie} >
            {data?.backdrop_path ? (
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original${data?.backdrop_path}` }}
                />
            ) : (
                <Banner
                    resizeMethod="resize"
                    source={ require('../../assets/nophoto.png') }
                />
            )}
            <Title>{data?.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E" />
                <Rate>{data?.vote_average}</Rate>
            </RateContainer>
        </Container>
    )
}