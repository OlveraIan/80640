import DatosPersonales from './DatosPersonales.jsx'
import DatosEscolares from './DatosEscolares.jsx'
function Formulario(props) {
    const {titulo}=props
    return(
        <>  
            <fieldset>
                <title>{titulo}</title>
                <DatosPersonales/>
                <DatosEscolares/>
            </fieldset>
            
        </>
    ) 
    
}

export default Formulario