import React, {useState} from 'react';

const Formulario = () => {
    
    //crear state de tareas
    const [tarea, actualizarTarea] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora:'',
        estado:'',
        detalle:'',
    });

    // Extraer valores de la tarea
    const { nombre, apellido, fecha, hora, estado, detalle } = tarea

    //actualizar state de tareas
    const actualizarState = evento => {
       actualizarTarea({
           ...tarea,
           [evento.target.name]: evento.target.value
       });
    };

    //cuando el user presiona agreagr tarea
    const submitTarea = evento => {
        evento.preventDefault();
        console.log('enviando..');

        // Valida si hay campos en blanco en el form
        if(nombre.trim() === '' || apellido.trim() === ''
        || fecha.trim() === '' || hora.trim() === ''
        || estado.trim() === '' || detalle.trim() === ''){
            //actualizarError(true)
            console.log('error');
            return;
        }

        // Eliminar el mensaje previo
        //actualizarError(false)

        //Asignar un ID
        //tarea.id = uuidv4()
        console.log(tarea)


        // Craer la nueva tarea
        //crearTarea(tarea)

        // Reainicar el form
         actualizarTarea({
            nombre: '',
            apellido: '',
            fecha: '',
            hora:'',
            estado:'',
            detalle:''
        })
    };

    return (
        <>
        <h2>Crear tarea</h2>

        <form
            onSubmit={submitTarea}

        >
            <label>Nombre del Dev</label>
            <input
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Nombre del desarrollador"
                onChange={actualizarState}
                value={nombre}
            />

            <label>Apellido del Dev</label>
            <input
                type="text"
                name="apellido"
                className="u-full-width"
                placeholder="Apellido del desarrollador"
                onChange={actualizarState}
                value={apellido} 
            />

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />

            <label>Estado de la Tarea</label>
            <select
                name="estado"
                onChange={actualizarState}
                value={estado}
            >
                <option value="doing">Doing</option>
                <option value="blocked" selected>Blocked</option>
                <option value="done">Done</option>
            </select>

            <label>Detalle de la tarea</label>
            <textarea
                type="text"
                name="detalle"
                className="u-full-width"
                placeholder="Detalle de la tarea"
                onChange={actualizarState}
                value={detalle}
            />

            <button type="submit" className="u-full-width button-primary">
                Agregar tarea
            </button>
        </form>
        </>
    );
}

export default Formulario;