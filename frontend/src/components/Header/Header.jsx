import React, { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Tittle from '../Tittle/Tittle'

const Header = () => {
    const [tittle, setTittle] = useState('Mascotas')
    return (
            <>
                <Tittle tittle={tittle}/>
                <div className='container d-flex justify-content-center mb-5'>
                    <Buttons
                        nombre = 'Mascotas'
                        typeBTN = 'outline-primary'
                        setTittle = {setTittle}
                    />
                    <Buttons
                        nombre = 'Personas'
                        typeBTN = 'outline-primary'
                        setTittle = {setTittle}
                    />
                    <Buttons
                        nombre = 'Adopcion'
                        typeBTN = 'outline-primary'
                        setTittle = {setTittle}
                    />
                </div>
            </>
    )
}

export default Header