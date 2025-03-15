import React from 'react';
import Card from './card';




const CardGrid = ({cards, title})=>{
    let cardcitys = cards
    let titleCards = title
    
    return (
       
        <div className="container mx-auto row my-5 pt-5 bg-black ">
            <h2 className='text-center text-white mt-3 mb-5' >{titleCards}</h2>
     <div className="row justify-content-center align-items-center">
        {cardcitys.map((card, index) => (
            <Card key={index} img={card.img} text={card.text} url={card.url} />
        ))}
    </div>
        </div>
        
    );

}

export default CardGrid