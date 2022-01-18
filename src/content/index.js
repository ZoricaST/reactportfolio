export default {
    nav: {
      logo: 'ZJ',
      links: [
        { text: 'Radovi', to: 'radovi' },
        { text: 'Kontakt', to: 'mojkontakt' },
      ],
    },
    header: {
      img:
        'https://firebasestorage.googleapis.com/v0/b/slike-89247.appspot.com/o/jaRio.jpg?alt=media&token=6c02cbcd-6255-401e-be90-8caaf5cc99b7',
      imgPlaceholder:
        'data:image/jpeg;base64,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',
      text: ['Zdravo!', "Ja sam Zorica.", 'Ja sam '],
      typical: [
        'web developer',
        2000,
        'Youtuber',
        2000,
        'Profesor matematike',
        2000,
      ],
      btnText: 'Pogledaj jos',
    },
  
    stack: {
      title: 'Stack',
      tech: [
        {
          img: process.env.PUBLIC_URL + '/assets/fb4.png',
          alt: 'mongodb',
        },
        {
          img: process.env.PUBLIC_URL + '/logo512.png',
          alt: 'react',
        },
        {
          img: process.env.PUBLIC_URL + '/assets/nextjs.png',
          alt: 'express',
        },
        {
          img: process.env.PUBLIC_URL + '/assets/node.png',
          alt: 'node',
        },
      ],
      desc: `Uvek u korak sa najnovijim tehnologijama`,
    },
    radovi: {
      slike:[
        {
         img: process.env.PUBLIC_URL + '/assets/tailwindrunavnet.png',
        alt: 'tailwindrunav',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/reactrunavm.png',
       alt: 'react ru nav',
     },
     {
      img: process.env.PUBLIC_URL + '/assets/reactruform.png',
     alt: 'react ru nav',
   },
     
    ],
    links: [
      { link: 'https://www.tailwindreactrunav.matkos.in.rs/' },
      { link: 'https://www.reactrunav.matkos.in.rs/'},
      { link: 'https://www.reactruform.matkos.in.rs/'},
    ],  
    gits: [
     
      { link: 'https://github.com/ZoricaST/tailwindreactrunav' },
      { link: 'https://github.com/ZoricaST/reactrunav' },
      { link: 'https://github.com/ZoricaST/reactruform' },
    ], 
    tuts: [
      
      { tut: process.env.PUBLIC_URL + '/assets/react tailwind nav.pdf',},
      { tut: process.env.PUBLIC_URL + '/assets/runav tut.pdf',},
      { tut: process.env.PUBLIC_URL + '/assets/runav tut.pdf',},
    ],
  }
  };