import React, { useState } from 'react'
import CheckIcon from './images/check-icon.png'

export default function CardComponent({ item }) {
    const [selected, setSelected] = useState(false)

    function addPreference(e) {
        console.log(item)
        if (selected) {
            setSelected(false)
        } else {
            setSelected(true)
        }
    }
    return (
        <div className='card-component' style={{
            backgroundImage: `url(${item.img})`,
            backgroundRepeat:'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            onClick={(e) => { addPreference() }}>

            {selected && <img src={CheckIcon} style={{ height: '20%', width: '15%' }} alt='not available' />}
            <div>{item.category}</div>
        </div>
    )
}
