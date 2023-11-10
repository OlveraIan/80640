import {TextField, Box, Button} from '@mui/material';
import React,{useEffect, useState } from 'react';
import axios from "axios";

function Formulario() {

    const [Cargando, setCargando] = useState(false)

    const [datosFormulario, setDatosFormulario] =useState({
        nombre:'',
        password:''
    })

    const procesarFormulario = async (evento) => {
        evento.preventDefault()
        console.log("Datos recuperados del formulario", datosFormulario)
        setCargando(true)
        try {
            const response = await hacerPeticion()
            console.log("salida",response.alumno)
            setCargando (false)
            if (datosFormulario.nombre === response.alumno) {
                console.log(datosFormulario.nombre +'existe')                
            } else {
                console.log('no existe' + datosFormulario.nombre)
            }
        } catch (error) {
            console.log('error: ',error)
            setCargando(false)
        }
    }

    const hacerPeticion = async () =>{
        try {
            const response = await axios.get('http://localhost:4567')
            console.log(response.data)
            return response.data
        } catch (error) {
            throw error
            
        }
    }

    const cambiosFormulario = (evento) => {
        const {name, value} = evento.target
        setDatosFormulario({...datosFormulario,[name]:value})
    }
    

    return (
        <>
            <h1>Inicio de Sesion</h1>
                <form onSubmit = {procesarFormulario}>
                    <Box m={5} >
                        <TextField 
                        label = "Nombre:" 
                        variant ='outlined' 
                        fullWidth 
                        onChange ={cambiosFormulario} 
                        name ='nombre' 
                        value ={datosFormulario.nombre}
                        >    
                        </TextField>
                    </Box>
                    <Box m={5} >
                        <TextField 
                        label = "Contraseña:" 
                        variant='outlined' 
                        type='password' 
                        fullWidth
                        onChange={cambiosFormulario}
                        name='password'
                        value={datosFormulario.password} 
                        >
                        </TextField>
                    </Box>
                    <Box m={5} >
                        <Button 
                        variant='contained' 
                        type='submit' 
                        color='primary' 
                        fullWidth
                        disabled={Cargando}
                        >
                            Iniciar Sesion
                        </Button>
                    </Box>
                </form>


        </>
    )    
}
export default Formulario;