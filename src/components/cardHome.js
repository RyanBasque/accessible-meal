import React from 'react'
import Logo from '../../assets/logo.png'

const CardHome = () => {
    return (
        <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', borderRadius: '10px', margin: '15px 0 0 0'}}>
            <div className='container-card' style={{widtg: '100%', padding: '20px', display: 'flex', flexDirection: 'row'}}>
                <div className='container-img' style={{ display: 'flex', flexDirection: 'row' }}>
                    <img src={Logo}></img>
                </div>
                <div className='restaurant-desc' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#000'}}>
                    <text>Nome</text>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <text>nota</text> <text>deficiencias</text>
                    </div>
                    <text>Endereço_______________</text>
                </div>
            </div>
        </div>
    )
}

export default CardHome
