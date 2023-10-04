const formulario = document.getElementById("formulario")
const form = (lPersonal,nombre,correo,lDireccion,direccion,ciudad) =>{
    return`
        <fieldset>
            <legend>${lPersonal}</legend>
            <label for="user">${nombre}</label>
            <input type ="text" name ="usuario" id="user">
            <label for="mail">${correo}</label>
            <input type="text" name="correo" id="mail">
        </fieldset>
        

        <fieldset>
            <Legend>${lDireccion}</Legend>
            <label for="addr">${direccion}</label>
            <input type ="text" name ="direccion" id="addr">
            <label for="city">${ciudad}</label>
            <input type="text" name="ciudad" id="city">
        </fieldset>
    `
}
const fieldset1 = (leyendaPersonal,nombreLabel,correoLabel)=>{

    return`
    <fieldset>
            <legend>${leyendaPersonal}</legend>
            <label for=${"user"}>${nombreLabel}</label>
            <input type ="text" name = ${"usuario"} id=${"user"}>
            <label for=${"mail"}>${correoLabel}</label>
            <input type="text" name="correo" id=${"mail"}>
        </fieldset>
    `
}

const fieldset2 = (leyendaDireccion,direccionLabel,ciudadLabel)=>{

    return`
    <fieldset>
            <legend>${leyendaDireccion}</legend>
            <label for=${"addr"}>${direccionLabel}</label>
            <input type ="text" name =${"direccion"} id=${"addr"}>
            <label for=${"city"}>${ciudadLabel}</label>
            <input type="text" name=${"ciudad"} id=${"city"}>
        </fieldset>
    `
}

//formulario.innerHTML = form("Informacion Personal","Nombre:","Correo:","Informacion de Direccion","Direccion:","Ciudad:");
formulario.innerHTML = fieldset1("Informacion Personal","Nombre:","Correo:" );
formulario.innerHTML += fieldset2("Informacion de Direccion","Direccion:","Ciudad:");