import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'



const Table = () => {
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
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mascota</th>
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
                                    <td>{_data.persona}</td>
                                    <td>
                                        <Buttons 
                                            nombre = 'Editar'
                                            typeBTN = 'outline-warning'
                                            id = {_data.id}
                                        />
                                        <Buttons 
                                            nombre = 'Eliminar'
                                            typeBTN = 'outline-danger'
                                            id = {_data.id}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
 
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Buttons 
                                nombre = 'Agregar'
                                typeBTN = 'outline-success'
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table