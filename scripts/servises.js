let items = [
    {
        id: 1,
        title: "Дружбан-Плюс",
        text: "Это система управления государством, источником власти в которой является сам народ. Именно народ решает, какие законы и нормы необходимы для гармоничного существования и развитиягосударства. Таким образом, каждый человек в демократическом обществе получает определенныйнабор свобод и обязательств сформированных с учетом интересов всего сообщества. Исходя извышесказанного, можно заключить, что демократия – это возможность для каждого человекасвободно участвовать в непосредственном управлении своим государством, обществом и личнойсудьбой в конечном счете.",
        cost: "50 000 рублей"
    },
    {
        id: 2,
        title: "Дружбан-Прем",
        text: "Это система управления государством, источником власти в которой является сам народ. Именно народ решает, какие законы и нормы необходимы для гармоничного существования и развитиягосударства. Таким образом, каждый человек в демократическом обществе получает определенныйнабор свобод и обязательств сформированных с учетом интересов всего сообщества. Исходя извышесказанного, можно заключить, что демократия – это возможность для каждого человекасвободно участвовать в непосредственном управлении своим государством, обществом и личнойсудьбой в конечном счете.",
        cost: "50 000 рублей"
    }
]
const redCross = document.getElementById('redCross')
const informationTable = document.getElementById('informationTable')
const backgroundPopup = document.getElementById('backgroundPopup')
const contentPopup = document.getElementById('contentPopup')
const proposalPopup = document.getElementById('proposalPopup')
const tablePopup = document.getElementById('tablePopup')
tablePopup.addEventListener('click',function(e){
    e.stopPropagation()
})
function resize() {

    informationTable.innerHTML=` 
    <div class="tabular-line tabular-line-margin flex-row">
                <b>#</b>
                <b>Название</b>
                <b>Описание</b>
                <b>Стоимость</b>
            </div>
    `
    for ( let item of items){



        let div = document.createElement('div')
        div.classList.add("tabular-line")
        div.classList.add("flex-row")
        let id = document.createElement('p')
        let title = document.createElement('p')
        let textContent = document.createElement('p')
        textContent.classList.add('desc')

        let cost = document.createElement('b')
    
        div.id = item.id
        id.innerHTML= item.id
        title.innerHTML = item.title
        textContent.innerHTML = item.text.slice(0, 150) + '...'
        cost.innerHTML = item.cost
    
    
        div.appendChild(id)
        div.appendChild(title)
        div.appendChild(textContent)
        div.appendChild(cost)
    
        if( window.screen.width < 576){
            textContent.innerHTML = `<p class="blue-text">Подробнее...</p>`
            backgroundPopup.addEventListener('click', function(e){
                e.stopPropagation()
                backgroundPopup.classList.add('display-none')
                document.body.style.overflow = 'auto'
            })
            redCross.addEventListener('click', function(){
                backgroundPopup.classList.add('display-none')
                document.body.style.overflow = 'auto'

            })
            textContent.addEventListener('click', function(e){
                document.body.style.overflow = 'hidden'
                e.stopPropagation()
                backgroundPopup.classList.remove('display-none')

                proposalPopup.textContent = item.title
                contentPopup.textContent = item.text
            })
        }

        div.addEventListener('click', function(){
            let arr = Array.from(informationTable.children)
            for (let item of arr){
            if(item.classList.contains('active') && item.id !== div.id){
                item.classList.remove('active')
                const child = Array.from(item.children).find(elem=>elem.classList.contains('desc'))
                child.innerHTML = child.innerHTML.slice(0, 150) + '...'
            }
           }
            if(div.classList.contains('active')){
                div.classList.remove('active')
                textContent.innerHTML = item.text.slice(0, 150) + '...'
            }
            else{
                div.classList.add('active')
                textContent.innerHTML = item.text
            }
        })
        
        informationTable.appendChild(div)
    }
}
resize()

window.addEventListener('resize', resize) 
