import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { url } from '../helpers/url'
import { ButtonStyled, RowCard, SpanCard } from '../styles/StyledComp'

const RenderData = () => {

    const [pokData, setPokData] = useState([])

    const showData = () => {
        axios.get(url)
            .then(response => {
                setPokData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(response => {
                showData()
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        showData()
    }, [])

    return (
        <div>

            <RowCard xs={1} md={4} className="g-5">
                {
                    pokData.map(pk => (
                        <Col key={pk.id}>
                            <Card>
                                <Card.Img variant="top" src={pk.img} />
                                <Card.Body>
                                    <Card.Title>{pk.name}</Card.Title>
                                    <Card.Subtitle>Tipo: <SpanCard>{pk.type}</SpanCard></Card.Subtitle>
                                    <Card.Subtitle>Peso: <SpanCard>{pk.weigth}</SpanCard></Card.Subtitle>
                                    <Card.Subtitle>Numero de Pokedex: <SpanCard>{pk.pokedex}</SpanCard></Card.Subtitle>
                                    <Card.Subtitle>Habilidad: <SpanCard>{pk.Ability}</SpanCard></Card.Subtitle>
                                    <ButtonStyled size="sm" bsPrefix='btn' onClick={() => deleteData(pk.id)}>
                                    Eliminar
                                    </ButtonStyled>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </RowCard>


        </div>


    )
}

export default RenderData
