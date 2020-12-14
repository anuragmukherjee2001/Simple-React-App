import React from 'react'

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";

function Images(){
    return (
        <div>
            <img src={img1} alt="Dummy image" height = "300" width = "300" />
            <img src={img2} alt="Dummy image" height = "300" width = "300"/>
            <img src={img3} alt="Dummy image" height = "300" width = "300"/>
        </div>
        );
}

export default Images