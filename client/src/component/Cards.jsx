import React from 'react'
import Card from './Card'

function Cards({arr}) {
    return (
        <div>
            {arr.map(m => <Card
                img={m.sprites}
                name={m.name}
                tipos={m.types}
            />)}
        </div>
    )
}

export default Cards
