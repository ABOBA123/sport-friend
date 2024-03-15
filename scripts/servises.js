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

const tabularLineFirst = document.getElementById('tabular-line-first')
const tabularLineSecond = document.getElementById('tabular-line-second')

const informationTable = document.getElementById('informationTable')

for ( let item of items){
    let div = document.createElement('div')
    div.classList.add("tabular-line")
    div.classList.add("flex-row")
    let id = document.createElement('p')
    let title = document.createElement('p')
    let textContent = document.createElement('p')
    let cost = document.createElement('b')

    id.innerHTML= item.id
    title.innerHTML = item.title
    textContent.innerHTML = item.text.slice(0, 150) + '...'
    cost.innerHTML = item.cost


    div.appendChild(id)
    div.appendChild(title)
    div.appendChild(textContent)
    div.appendChild(cost)

    div.addEventListener('click', function(){
        if(div.classList.contains('active')){
            div.classList.remove('active')
            textContent.innerHTML = item.text.slice(0, 150)
        }
        else{
            div.classList.add('active')
            textContent.innerHTML = item.text
        }
    })

    informationTable.appendChild(div)
}