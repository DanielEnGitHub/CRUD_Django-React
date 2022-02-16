import React from 'react'

const Buttons = ({ nombre, typeBTN, setTittle = ()=>{}, id = null }) => {
    const handleClic = () =>{
        if (id){
            if(nombre === 'Eliminar')
                fetch(`http://127.0.0.1:8000/api/mascotas/${id}`,{
                method: 'DELETE'
              });
            else if (nombre === 'Editar')
                console.log('Editar');
        }else{
            setTittle(nombre);
        }
    }

    return (
        <button 
            className={`btn btn-${typeBTN} mr-2`}
            onClick={handleClic}>{nombre}
        </button>
    )
}

export default Buttons