import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Buttons = ({ nombre, typeBTN, setTittle = ()=>{}, id = null, setData, data_toggle = null, data_target = null, peticionEdit = null, setFormEdit = () => {} }) => {    const [form, setForm] = useState({});
    const handleClic = () =>{
        const peticion = async () => {
            await fetch(`http://127.0.0.1:8000/api/mascotas/${id}`,{
                    method: 'DELETE'
            });

            const response = await fetch('http://127.0.0.1:8000/api/mascotas/');
            const dataApi = await response.json();
            setData(dataApi);
        }

        if (id){
            if(nombre === 'Eliminar'){
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: `Se eliminara el objeto con el id ${id}`,
                    text: "Este paso no se puede revertir",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        peticion();
                        MySwal.fire(
                        'Eliminado',
                        'El objeto ha sido eliminado',
                        'success'
                        )
                    }
                })   
            }else if(nombre === 'Editar'){
                const peticionFrom = async () => {
                    const response = await fetch(`http://127.0.0.1:8000/api/mascotas/${id}`);
                    const data = await response.json();

                    setFormEdit(data);
                }

                peticionFrom();
            }
        }else{
            setTittle(nombre);
        }
    }

    return (
        <>
        <button 
            className={`btn btn-${typeBTN} mr-2`}
            data-toggle = {data_toggle}
            data-target = {data_target}
            onClick={handleClic}>{nombre}
        </button>
        </>
    )
}

export default Buttons