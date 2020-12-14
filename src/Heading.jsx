import React from 'react';

var heading = {
    color: '#FF0000',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: '50px',
}

var fname = 'Anurag';

function Heading(){
    return <h1 style = {heading} > My name is {fname} </h1>
}

export default Heading