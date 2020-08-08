const Database = require('./db');
Database.then(db => {
    proffy = {
        name: 'Diego Fernandes', 
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" alt="Diego Fernandes', 
        whatsapp: '92837673', 
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
    };
    classValue = {
        subject: 'Química', 
        cost: '20'
    };
    classSchedule = [
        {
            weekday: 1, 
            time_from: 1200, 
            time_to: 1800
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1600
        }
    ];
});