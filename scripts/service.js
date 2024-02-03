function validateInput(id){
    const div = document.getElementById(id)
    const input = div.children[1]
    const error = div.children[2]

    input.addEventListener('input', (e) => {
        if(!e.target.value && !div.classList.contains('active')){
            error.innerHTML = "Поле обязательно к заполению"
        }else{
            error.innerHTML = ""
        }
    })

    input.addEventListener('blur', (e) => {
        if(!e.target.value){
            error.innerHTML = "Поле обязательно к заполению"
        }else{
            error.innerHTML = ""
        }
    })
}

validateInput('name')
validateInput('email')
validateInput('phone')