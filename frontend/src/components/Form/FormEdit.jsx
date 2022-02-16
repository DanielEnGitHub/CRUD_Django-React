import React from 'react'

const FormEdit = ({ formEdit, setFormEdit, peticion, closeModal }) => {

    const handleInputChange = e => {
        const changedFormValues = {
            ...formEdit,
            [e.target.name] : e.target.value
        }
        setFormEdit(changedFormValues);
    }

    const agregar = async (e) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:8000/api/mascotas/${formEdit.id}/`, {
            method: 'PUT', // or 'PUT' sin esta propiedad, el valor por defecto sería el GET
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formEdit), //Tipo de datos enviados
        });

        peticion();

        closeModal();

    }
    return (
            <div className="modal fade" id="editar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
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
                                        value={formEdit.nombre}
                                    />

                                    <label htmlFor="recipient-name" className="col-form-label">Genero:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        onChange={handleInputChange}
                                        name='genero'
                                        value={formEdit.genero}
                                    />

                                    <label htmlFor="recipient-name" className="col-form-label">Edad aproximada:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        onChange={handleInputChange}
                                        name='edad_aproximada'
                                        value={formEdit.edad_aproximada}
                                    />

                                    <label htmlFor="recipient-name" className="col-form-label">Fecha adopcion:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        onChange={handleInputChange}
                                        name='fecha_rescate'
                                        value={formEdit.fecha_rescate}
                                    />

                                    <label htmlFor="recipient-name" className="col-form-label">Persona ID:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        onChange={handleInputChange}
                                        name='persona'
                                        value={formEdit.persona}
                                    />
                                    {/* <select htmlFor="recipient-name" className="custom-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select> */}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary" id='agregarBTN'>Actualizar</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default FormEdit