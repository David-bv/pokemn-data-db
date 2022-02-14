import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { imgCloudUp } from '../helpers/imageCloud'
import { url } from '../helpers/url'
import { ContForm } from '../styles/StyledComp'

const FormPok = () => {
    const [pkmon, setPkmon] = useState({
        id: '',
        name: '',
        type: '',
        img: '',
        weigth: '',
        pokedex: '',
        Ability: ''
    })

    const { name, type, img, weigth, pokedex, Ability } = pkmon

    const inputChange = ({ target }) => {
        setPkmon({
            ...pkmon,
            [target.name]: target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    const imgFile = (e) => {
        const file = e.target.files[0]
        console.log('imagen');
        console.log(file);
        imgCloudUp(file)
            .then(response => {
                pkmon.img = response
            }).catch (error => {
                console.log(error);
            })
    }

    const sendData = () => {
        axios.post(url, pkmon)
            .then(repsonse => {
                console.log(repsonse.data);
            }).catch( error => {
                console.log(error);
            })
            alert('Registro Exitoso')
            
    }

    return (
        <ContForm>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name='name' value={name}  onChange={inputChange} placeholder="Ingrese el nombre"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="text" name='type' value={type}  onChange={inputChange} placeholder="Ingrese el tipo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="text" name='weigth' value={weigth}  onChange={inputChange} placeholder="Ingrese el peso" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Pokedex</Form.Label>
                    <Form.Control type="number" name='pokedex' value={pokedex}  onChange={inputChange} placeholder="Ingrese el número" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Habilidad</Form.Label>
                    <Form.Control type="text" name='Ability' value={Ability}  onChange={inputChange} placeholder="Ingrese la habilidad" />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" size="sm" name='img' value={img}  onChange={imgFile} />
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={sendData}>
                    Guardar
                </Button>
            </Form>
        </ContForm>
    )

}

export default FormPok