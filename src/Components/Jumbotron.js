import React from "react";
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import ocean from '../img/ocean.jpg';
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo{
        background: url(${ocean}) no-repeat fixed bottom;
        background-size: cover;
        color: efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    h1{
        color: #fff;
        
    }
    p{
        color: #fff;
        
    }
    .overlay{
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1> Web Developer Blog</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
        </Container>
    </Jumbo> 
    </Styles>
)

export default Jumbotron;