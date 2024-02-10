
function initInput(){
    const elems = document.querySelectorAll('[input-group="true"]')
    for(const elem of elems){
        const input = Array.from(elem.children).find((item) => item.nodeName === 'INPUT')
        if(input && elem){
            elem.onclick = (e) => {
                input.focus();
                if(elem.classList.contains('active') ){
                    if(!input.value) {
                        input.blur()
                        elem.classList.remove('active')
                    }
                }else{
                    elem.classList.add('active')
                }
            }
            input.addEventListener('blur', () => {
                if(!input.value) {
                    elem.classList.remove('active')
                }
            })
        }     
    }
}

function blockedButton(){
    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    const phoneInput = document.getElementById('phoneInput')
    const unActiveButton = document.getElementById('unActiveButton')
    if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === ""){
        unActiveButton.classList.add('unactive-button');
        unActiveButton.disabled = true; 
    }
    else {
        unActiveButton.classList.remove('unactive-button');
        unActiveButton.classList.add('blue-button');
        unActiveButton.disabled = false; 
    }
    nameInput.addEventListener("input", blockedButton);
    emailInput.addEventListener("input", blockedButton);
    phoneInput.addEventListener("input", blockedButton);
}


blockedButton()
initInput()