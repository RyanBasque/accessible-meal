import React from 'react'
import Logo from '../../assets/logo.png'

const CardRestaurant = () => {
    return (
        <div style={{ width: '100%', backgroundColor: '#3154C5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='container-card' style={{widtg: '100%', padding: '20px', display: 'flex', flexDirection: 'row'}}>
                <div className='container-img' style={{ display: 'flex', flexDirection: 'row' }}>
                    <img src={Logo}></img>
                </div>
                <div className='restaurant-desc' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white'}}>
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

export default CardRestaurant
