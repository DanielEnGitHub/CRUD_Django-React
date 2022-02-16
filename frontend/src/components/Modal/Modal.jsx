import React, { useState } from 'react'

const Modal = ({ titulo, setData }) => {

    const initialForm = {
        nombre: '',
        genero: '',
        edad_aproximada: null,
        fecha_rescate: '',
        persona: null,
    }

    const [form, setForm] = useState(initialForm);

    const handleInputChange = e => {
        const changedFormValues = {
            ...form,
            [e.target.name] : e.target.value
        }

        setForm(changedFormValues);
    }


    const peticion = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/mascotas/');
        const dataApi = await response.json();
        
        setData(dataApi);
    }


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
                <div className="modal fade" id="agregar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ agregar }>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={handleInputChange}
                                            name='nombre'
                                        />

                                        <label htmlFor="recipient-name" className="col-form-label">Genero:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={handleInputChange}
                                            name='genero'
                                        />

                                        <label htmlFor="recipient-name" className="col-form-label">Edad aproximada:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={handleInputChange}
                                            name='edad_aproximada'
                                        />

                                        <label htmlFor="recipient-name" className="col-form-label">Fecha adopcion:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={handleInputChange}
                                            name='fecha_rescate'
                                        />

                                        <label htmlFor="recipient-name" className="col-form-label">Persona ID:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            onChange={handleInputChange}
                                            name='persona'
                                        />
                                        {/* <select htmlFor="recipient-name" className="custom-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select> */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        <button type="submit" className="btn btn-primary" id='agregarBTN'>Agregar</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Modal