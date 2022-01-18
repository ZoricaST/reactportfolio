import React from 'react'
import content from '../content'
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
    return (
        <div className='bg-red-300'>
            <div className='flex items-center justify-between w-10/12 mx-auto py-3'>
                <h1 className='text-3xl font-bold'> {content.nav.logo}{' '}
                <span className='w-3 h-3 bg-red-500 inline-block rounded-full'></span>
                </h1>
               
                <div>
                    {content.nav.links.map((link, index) =>{
                        return <span key={index} className='text-xl mr-4'>
                             <ScrollLink className='cursor-pointer'  to={link.to} smuth={true}>{link.text}</ScrollLink>
                             </span>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Navigation
