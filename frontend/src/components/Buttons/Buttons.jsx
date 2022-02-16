import React from 'react'

const Buttons = ({ nombre, typeBTN, setTittle=()=>{} }) => {
    const handleClic = () =>{
        setTittle(nombre);
    }

    return (
        <button className={`btn btn-${typeBTN} mr-2`} onClick={handleClic}>{nombre}</button>
    )
}

export default Buttons