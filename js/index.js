
let counter = 0;
let aData = Array.from(document.querySelectorAll('.track'))
let storedArr = [];
let alertCounter = 0
let complete = document.getElementById('complete')
let completed = document.getElementById('completed');
let body = document.getElementsByTagName('body')
let bodyClass = body[0].className
let trackElems = document.getElementsByClassName('track');
let final = document.getElementById('final')
let bgMusic = new Audio('assets/audio/electro-win.mp3');
bgMusic.volume = .5;

for(let i = 0; i < trackElems.length; i++) {
    trackElems[i].addEventListener("click", storeAndSess, false);
}

"overview" in sessionStorage && bodyClass == 'overview' ? complete.classList.remove('display-none') : null
"qulla" in sessionStorage && bodyClass == 'qulla' ? complete.classList.remove('display-none') : null
"conti" in sessionStorage && bodyClass == 'conti' ? complete.classList.remove('display-none') : null
"anti" in sessionStorage && bodyClass == 'anti' ? complete.classList.remove('display-none') : null
"chinchay" in sessionStorage && bodyClass == 'chinchay' ? complete.classList.remove('display-none'): null
"final" in sessionStorage && bodyClass == 'final' ? complete.classList.remove('display-none') : null

checkSessionStorage()

function storeAndSess() {
    // Pulls value only once
    this.classList.add('clicked')
    if(!storedArr.includes(this)) {
        storedArr.push(this)

    } 

    // Since the content doesn't matter, only the length, I can just compare the two lengths
    if(storedArr.length === aData.length && !(bodyClass in sessionStorage)) {
        complete.classList.remove('display-none');
        bgMusic.play();
       switch(bodyClass) {
        case 'qulla': 
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
        case 'anti':
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
        case 'conti':
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
        case 'chinchay':
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
        case 'overview':
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
        case 'final':
            sessionStorage.setItem(bodyClass, true);
            checkSessionStorage()
        break;
       }
}
}

function checkSessionStorage() {
    if("overview" in sessionStorage && "chinchay" in sessionStorage && "qulla" in sessionStorage && "conti" in sessionStorage && "anti" in sessionStorage) {
        if(bodyClass == 'qulla' || bodyClass == 'conti' || bodyClass == 'anti' || bodyClass == "chinchay") {
            complete.childNodes[1].innerText = 'Head Back to the Center!'
            completed.children[0].innerText = 'Congrats on viewing all regions! Head Back to Antasuyu (Center Region) for the final piece!';
        }
        if("overview" in sessionStorage && bodyClass == 'overview'){ 
            complete.classList.add('display-none');
            final.classList.remove('display-none')
        }
    }
}