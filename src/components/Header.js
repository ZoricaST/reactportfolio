import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical'
import content from '../content';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const [animated, setAnimated]= useState(false);

    useEffect(()=> {
        setAnimated(true);
    }, []);
    return (
        <div
        className='min-h-screen flex items-center justify-center bg-red-500'
        style={{
            background:'#b53a42',
        }}
        >
            <div className='flex flex-col md:flex-row  items-center justify-between '>
                <div className='w-full w-3/5'>
                    <LazyLoadImage className='rounded-xl' src={content.header.img} effect='blur'/>
                </div>
                <div className='text-white font-dosis text-center pl-0.5 md:text-left '>
                    <h2 className={`${animated? "":"translate-y-10 opacity-0" } transform transition duration-2000 ease-in-out
                     text-3xl md:text-4xl font-bold`}>
                        {content.header.text[0]}<br/>
                        {content.header.text[1]}
                    </h2>

                    <h1 className={`${animated? "":"translate-y-10 opacity-0" } transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}>
                    <i class='fas fa-book-open'></i>{' '}
                     {content.header.text[2]}<br/>
        
                        
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />   
                    </h1>
                    <ScrollLink to="orudje" smuth={true}>
                    <div className='floating'>
                    
                    <button className='font-bold bg-red-900 px-10 py-3 text-xl uppercase mt-10 md:ml-0.5 rounded-lg'>
                        {content.header.btnText}
                    </button>
                   
                    </div>
                    </ScrollLink>
                </div>
                    
            </div>
            
        </div>
    )
}

export default Header
