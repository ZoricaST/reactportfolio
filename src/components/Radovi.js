import React from 'react';
import content from '../content';


const Radovi = () => {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center font-dosis"
        id="radovi"
      >
            
            <h1 className='text-5xl font-bold'>Moji radovi:</h1>
        <div className="p-10 grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-3 xl:grid-cols-3 gap-5">
       
        <div className="rounded overflow-hidden shadow-2xl ">
          <img className="w-full" src={content.radovi.slike[0].img} alt="Mountain"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React Tailwin Navigacija</div>
            <p className="text-gray-700 text-base">
              Ovo je React aplikacija stilizovana Taiwindom sa "reusable" navigacijom. 
              Ima 6 stranica i na svakoj je navigacija drugačijeg sadržaja.</p>
           

          </div>
          <div className="px-6 pt-4 pb-2">
             <a className="hyperlink" href={content.radovi.links[0].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                 Pogledaj aplikaciju</span></a>

             <a className="hyperlink" href={content.radovi.gits[0].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Pogledajte kod na GitHubu</span></a>

               <a className="hyperlink" href={content.radovi.tuts[0].tut}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Pogledajte tutorijal</span></a>
            
          </div>
        </div>
      
        <div className="rounded overflow-hidden shadow-2xl ">
          <img className="w-full" src={content.radovi.slike[1].img} alt="runav"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React Navigacija</div>
            <p className="text-gray-700 text-base">
            Ovo je React aplikacija sa "reusable" navigacijom. 
              Ima 6 stranica i na svakoj je navigacija drugačijeg sadržaja. Može da se koristi kao baza.</p>
           

          </div>
          <div className="px-6 pt-4 pb-2">
             <a className="hyperlink" href={content.radovi.links[1].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                 Pogledaj aplikaciju</span></a>

             <a className="hyperlink" href={content.radovi.gits[1].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Pogledajte kod na GitHubu</span></a>

               <a className="hyperlink" href={content.radovi.tuts[1].tut}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Pogledajte tutorijal</span></a>
            
          </div>
        </div>
    
        <div className="rounded overflow-hidden shadow-2xl ">
          <img className="w-full" src={content.radovi.slike[2].img} alt="runav"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React Forma</div>
            <p className="text-gray-700 text-base">
            Ovo je React aplikacija sa "reusable" formom tako da se polja ubacuju po želji. 
            </p>
           

          </div>
          <div className="px-6 pt-4 pb-2">
             <a className="hyperlink" href={content.radovi.links[2].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                 Pogledaj aplikaciju</span></a>

             <a className="hyperlink" href={content.radovi.gits[2].link}>
               <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               Pogledajte kod na GitHubu</span></a>

              
          </div>
        </div>
     
      </div>
      </div>
 

    )
}

export default Radovi
