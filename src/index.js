import './assets/styles/styles.scss';

const currValue = document.querySelector('.currentValue p')
const increment = document.querySelector('.ajustment.droite .moins')
const decrement = document.querySelector('.ajustment.gauche .moins')
const limiteHaute = document.querySelector('.limitNumber.haute')
const limiteBasse = document.querySelector('.limitNumber.basse')
const notification = document.querySelector('.notication')
const area = document.querySelector('.area');
console.log(typeof currValue)
const reset = document.querySelector('.reset')

let Currentvalue = 0;

function affichageValue(pas,addition){
    let currentProv;
    currentProv = (addition) ? Currentvalue + pas : Currentvalue - pas ;
    if(parseInt(limiteHaute.value) <  currentProv){
        notification.classList.add('affiche-notif');
        notification.textContent = `Limite haute (${limiteHaute.value}) atteinte`;
    }else if(parseInt(limiteBasse.value) >  currentProv){
        notification.classList.add('affiche-notif');
        notification.textContent = `Limite basse (${limiteBasse.value}) atteinte`;
    }else{
        const notifExist = notification.classList.contains('affiche-notif');
        if(notifExist){
            notification.classList.remove('affiche-notif')
        }
        Currentvalue = currentProv;
        currValue.textContent = Currentvalue;
    }
}

affichageValue(0,true);

increment.addEventListener('click', (e)=> {
    const pasIncrement = parseInt(document.querySelector('.plusInput').value) ;
    affichageValue(pasIncrement,true);
})

decrement.addEventListener('click',(e)=>{
    const pasIncrement = parseInt(document.querySelector('.moinsInput').value) ;
    affichageValue(pasIncrement,false);
})

reset.addEventListener('click',(e) =>{
    Currentvalue = 0;
    affichageValue(0,true);
})

area.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    decrement.dispatchEvent(new Event('click'))
})
area.addEventListener('click', (e) => {
    e.preventDefault()
    increment.dispatchEvent(new Event('click'))
})


