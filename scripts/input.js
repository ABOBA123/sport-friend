const validationFieldIDS = ['name', 'email', 'phone']
const BUTTON_ID = 'send_button'

function getGroupInputs(){
    return document.querySelectorAll('[input-group="true"]')
}

function getInput(children){
    return Array.from(children).find((item) => item.nodeName === 'INPUT' || item.nodeName === "TEXTAREA")
}

function initInput(){
    const elems = getGroupInputs()
    for(const elem of elems){
        const input = getInput(elem.children)
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

function initValidate(){
    const button = document.getElementById(BUTTON_ID)
    const elems = Array.from(getGroupInputs()).filter((elem) => validationFieldIDS.includes(elem.id))
    function validateFields(){
        let validatedCount = 0
        for(const elem of elems){
            const input = getInput(elem.children)
            if(input.value){
                validatedCount++
            }
        }
    
        if(validationFieldIDS.length !== validatedCount){
            button.disabled = true
        }else{
            button.disabled = false
        }
    }
    
    for(const elem of elems){
        const input = getInput(elem.children)
        input.addEventListener('input', validateFields)
    }

    validateFields()
}


initValidate()

initInput()