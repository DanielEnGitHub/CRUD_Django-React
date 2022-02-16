import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Modal from '../Modal/Modal'


const initialForm = {
    nombre: '',
    genero: '',
    edad_aproximada: '',
    fecha_rescate: '',
    persona: '',
}
const Table = () => {
    const [formEdit, setFormEdit] = useState(initialForm);
    const [data, setData] = useState([])

    const peticion = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/mascotas/');
        const dataApi = await response.json();
        
        setData(dataApi);
    }

    useEffect(() => {
        peticion();
    }, [])

    return (
        <div className="container">
            <Modal
                setData = {setData}
                data = {data}
                formEdit = {formEdit}
                setFormEdit = {setFormEdit}
            />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre Mascota</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Fecha Adopcion</th>
                        <th scope="col">Persona</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (_data) => {
                            return (
                                <tr key={_data.id}>
                                    <th scope="row">{_data.id}</th>
                                    <td>{_data.nombre}</td>
                                    <td>{_data.genero}</td>
                                    <td>{_data.edad_aproximada}</td>
                                    <td>{_data.fecha_rescate}</td>
                                    <td>{_data.persona}</td>
                                    <td>
                                        <Buttons
                                            nombre = 'Editar'
                                            typeBTN = 'outline-warning'
                                            id = {_data.id}
                                            setData = {setData}
                                            data_toggle = 'modal'
                                            data_target = '#editar'
                                            setFormEdit = {setFormEdit}
                                        />
                                        <Buttons 
                                            nombre = 'Eliminar'
                                            typeBTN = 'outline-danger'
                                            id = {_data.id}
                                            setData = {setData}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
 
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={7}>
                            <Buttons 
                                nombre = 'Agregar'
                                typeBTN = 'outline-success'
                                setData = {setData}
                                data_toggle = 'modal'
                                data_target = '#agregar'
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table