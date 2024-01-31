
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

initInput()