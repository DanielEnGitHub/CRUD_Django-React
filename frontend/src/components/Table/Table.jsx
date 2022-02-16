import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'



const Table = () => {
    const [data, setData] = useState([])

    const peticion = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/mascotas/');
        const data = await response.json();
        
        console.log(data);
        return data;
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
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>
                        <Buttons 
                            nombre = 'Editar'
                            typeBTN = 'outline-warning'
                        />
                        <Buttons 
                            nombre = 'Eliminar'
                            typeBTN = 'outline-danger'
                        />
                    </td>
                </tr>
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