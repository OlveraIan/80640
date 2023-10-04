const formulario = document.getElementById("envio")
        formulario.addEventListener("submit",evento =>{
            evento.preventDefault()
            let u = document.getElementById("user").value
            let p = document.getElementById("pass").value
            alert(u+p)
        })