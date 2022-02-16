import React, { useState } from 'react'
import FormAdd from '../Form/FormAdd';
import FormEdit from '../Form/FormEdit';

// Valores iniciales
const initialForm = {
    nombre: '',
    genero: '',
    edad_aproximada: null,
    fecha_rescate: '',
    persona: null,
}
const Modal = ({ data, setData, formEdit = null, setFormEdit = null }) => {
    const [form, setForm] = useState(initialForm);

    // Cambios dentro de input
    const handleInputChange = e => {
        const changedFormValues = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(changedFormValues);
    }

    // Peticion
    const peticion = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/mascotas/');
        const dataApi = await response.json();
        
        setData(dataApi);
    }

    // Cerrar Modal
    const closeModal = () => {
        // get modals
        const modals = document.getElementsByClassName('modal');
        // on every modal change state like in hidden modal
        for(let i=0; i<modals.length; i++) {
        modals[i].classList.remove('show');
        modals[i].setAttribute('aria-hidden', 'true');
        modals[i].setAttribute('style', 'display: none');
        }
        // get modal backdrops
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
        // remove every modal backdrop
        for(let i=0; i<modalsBackdrops.length; i++) {
        document.body.removeChild(modalsBackdrops[i]);
        }
    }

    // Agregar
    const agregar = async (e) =>{
        e.preventDefault();
        e.target.reset();
        await fetch('http://127.0.0.1:8000/api/mascotas/', {
            method: 'POST', // or 'PUT' sin esta propiedad, el valor por defecto sería el GET
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form), //Tipo de datos enviados
        });

        peticion();

        setForm(initialForm);

        closeModal();
    }

    return (
            <>
            <FormAdd
                agregar = {agregar}
                handleInputChange = {handleInputChange}
            />

            <FormEdit
                formEdit = {formEdit}
                setFormEdit = {setFormEdit}
                peticion = {peticion}
                closeModal = {closeModal}
            />

            </>
    )
}

export default Modal