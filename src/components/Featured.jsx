import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const HeroImg = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    img{
        width:100vw;
        height:100vh;
        object-fit:cover;
    }
    
    .spinner{
        position:absolute;
        top:0;
        bottom:0;
        margin:auto;
    }

`


export const Featured = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://source.unsplash.com/random")
        .then(res => res.status === 200  && setLoading(false))
    })


    return (
        <HeroImg>
            <img src="https://source.unsplash.com/random" />
           { loading && ( 
            <Spinner animation="border" role="status" className="spinner">
            </Spinner> )}
        </HeroImg>
    )
}



