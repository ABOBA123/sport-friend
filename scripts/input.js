
function initInput(){
    const elems = document.querySelectorAll('[input-group="true"]')
    for(elem of elems){
        const inputName = elem
        const input = Array.from(elem.children).find((item) => item.nodeName === 'INPUT')
        if(input && inputName){
            inputName.onclick = (e) => {
                input.focus();
                if(inputName.classList.contains('active') ){
                    if(!input.value) {
                        inputName.classList.remove('active')
                    }
                }else{
                    inputName.classList.add('active')
                }
            }
            input.addEventListener('blur', () => {
                if(!input.value) {
                    inputName.classList.remove('active')
                }
            })
        }     
    }
}

initInput()