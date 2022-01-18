import React from 'react';
import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Orudje = () => {
    return (
        <div
        className="min-h-screen flex flex-col items-center justify-center font-dosis"
        id="orudje"
      >
            
            <h1 className='text-5xl font-bold'>Tehnologije koje koristim:</h1>
            <div className='flex flex-wrap justify-center mt-10'>
            {content.stack.tech.map((tech, index)=>{
                   return (
                   <span className={`${index %2 ===0 ? 'floating': 'refloating'} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-2`}>
                       <LazyLoadImage src={tech.img} alt={tech.alt}/>
                   </span>
               );
                   })}
            </div>
            <div>
                <p className='w-10/12 md:max-w-xl text-xl text-center mt-10'>{content.stack.desc}</p>
            </div>
            </div>
       
    )
}

export default Orudje
