const membri = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
];

const divElement = document.querySelector('div.col-12');



for( let i = 0; i < membri.length; i++){
    const membro = membri[i];
    let key;
    for ( key in membro){
        console.log(key + ' ==> ' + membro[key]);
    } 
    const newDivElement = document.createElement('div');
    newDivElement.classList.add('collocamento_div')
    let pictures = '<img src="./img/' + membro.img + '">';
    newDivElement.innerHTML = membro.name + ' ==> ' + membro.role + pictures;
    divElement.append(newDivElement);
}