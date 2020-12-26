import React from 'react'
import Heading from './Heading';
import Cards from './Cards';
import Information from './Information'

import './App.css'

function App(){
    return(
        <div>
            <Heading/>
            <Cards 
            imgsrc = {Information[0].img}
            pname = {Information[0].name}
            link = {Information[0].link}
            />

            <Cards 
            imgsrc = {Information[1].img}
            pname = {Information[1].name}
            link = {Information[1].link}
            />

            <Cards 
            imgsrc = {Information[2].img}
            pname = {Information[2].name}
            link = {Information[2].link}
            />

            <Cards 
            imgsrc = {Information[3].img}
            pname = {Information[3].name}
            link = {Information[3].link}
            />

            <Cards 
            imgsrc = {Information[4].img}
            pname = {Information[4].name}
            link = {Information[4].link}
            />
            
        </div>
    );
}

export default App