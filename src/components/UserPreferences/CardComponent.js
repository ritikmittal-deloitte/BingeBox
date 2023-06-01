<<<<<<< HEAD
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

            {selected && <img src={CheckIcon} style={{ height: '20%', width: '10%' }} alt='not available' />}
            <div style={{fontFamily:'sans-serif',fontWeight:'500'}}>{item.category}</div>
        </div>
    )
}
=======
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

            {selected && <img src={CheckIcon} style={{ height: '20%', width: '10%' }} alt='not available' />}
            <div style={{fontFamily:'sans-serif',fontWeight:'500'}}>{item.category}</div>
        </div>
    )
}
>>>>>>> 4b15fe04d592a95e4cfdc38fd52f7daaf2145929
