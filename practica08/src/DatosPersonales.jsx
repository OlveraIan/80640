function DatosPersonales() {
    return (
        <>
          <fieldset>
              <legend>{"Datos Personales"}</legend>
              <label htmlFor={nombre}>{"Nombre"}: </label>
              <input type="text" id={nombre}/>
              <label htmlFor={apellidop}>{"Apellido Paterno"}: </label>
              <input type="text" id={apellidop}/>
              <label htmlFor={apellidom}>{"Apellido Materno"}: </label>
              <input type="text" id={apellidom}/>
              <label htmlFor={password}>{"Contraseña"}: </label>
              <input type="text" id={password}/>
          </fieldset>
      </>
    )
}
export default DatosPersonales