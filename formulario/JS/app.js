document.querySelector('form').addEventListener("submit", e=>{
    e.preventDefault()
    validar_envio()
})
function validar_envio(){

    //VALIDACION DE NOMBRE Y APELLIDO
        let nombre=document.getElementById("nombre").value;
        let expReguno= /^[a-z ,.'-]+$/i;
    
    if(expReguno.test(nombre)){
        console.log('el nombre es correcto');
    } 
    else{
        console.log('el nombre no es correcto');
    }

     //VALIDACION DE NUMERO TELEFONICO
    
     let telefono=document.getElementById("telefono").value;
     let expRegcuatro= (/^\d{4}-\d{3}-\d{2}-\d{2}$/);
    
     if(expRegcuatro.test(telefono)){
         console.log('el telefono es correcto');
     } 
     else{
         console.log('el telefono no es correcto');
     }

    let correo=document.getElementById("correo").value;
    let expRegdos= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //VALIDACION DE CORREO ELECTRONICO 
    if(expRegdos.test(correo)){
        console.log('el correo es correcto');
    } 
    else{
        console.log('el correo es incorrecto');
    }

//VALIDACION DE CEDULA DE IDENTIDAD 
    let cedula=document.getElementById("cedula").value;
    let expRegtres= /^([VE]-)?\d{1,8}$/i;

    if(expRegtres.test(cedula)){
        console.log('la cedula es correcta');
    } 
    else{
        console.log('la cedula no es correcta');
    }

}