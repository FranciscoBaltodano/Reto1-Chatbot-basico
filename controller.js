const chatContainer = document.querySelector('#chatContainer')
import {patterns} from './patterns.js'

document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const mensaje = document.querySelector('#mensaje');
    crearMensajeUser(mensaje.value);
    crearMensajeMaquina(mensaje.value);
    mensaje.value = ''; 
});

const crearMensajeUser =(mensaje)=>{
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('chat','chatUser');
    nuevoMensaje.innerText = mensaje;
    chatContainer.appendChild(nuevoMensaje);
}

const buscarRespuesta = (mensaje) => {
    const respuesta = patterns.find(pattern => pattern.pattern.test(mensaje));
    
    if (respuesta) {
        const index = Math.floor(Math.random() * respuesta.responses.length);
        return (respuesta.responses[index]);
    }
    return "No me quedo claro lo que dijiste";
};

const crearMensajeMaquina =(mensaje)=>{
    const respuesta = buscarRespuesta(mensaje);
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('chat','chatMaquina');
    nuevoMensaje.innerText = respuesta;
    chatContainer.appendChild(nuevoMensaje);
};