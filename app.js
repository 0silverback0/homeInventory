const form = document.querySelector('#form')
const items = document.querySelector('#items')
const submit = document.querySelector('#submit')
const list = document.querySelector('#list')
let arr = []

const makeItem = () => {
    let item = items.value
    if(!item){
        alert('you must enter a item')
        return
    }else{
    let itemLi = document.createElement('li')
    itemLi.innerHTML = item + '<button class="float-right">x</button>'
    list.append(itemLi)
    }
}


const saveToStorage = (item) => {
    if(!item) return 
    arr = JSON.parse(localStorage.getItem('food')) || []
    arr.push(item)
    localStorage.setItem('food', JSON.stringify(arr))
}

const deleteFromStorage = (deletedItem) => {
    let storedData = JSON.parse(localStorage.getItem('food'))
    let newData = storedData.filter(function(value){
        return value !== deletedItem
    })
    localStorage.setItem('food', JSON.stringify(newData))
}

form.addEventListener('submit', e => {
    e.preventDefault()
    makeItem()
    saveToStorage(items.value)
    items.value = ''
})

list.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('checked')
    }

    if(e.target.classList.value === 'float-right'){
        e.target.parentElement.remove()
        let toBeDeleted = e.target.parentElement.firstChild.data
        deleteFromStorage(toBeDeleted)
    }
})

window.onload= () => {
    let data = JSON.parse(localStorage.getItem('food'))
    for(let item of data){
        let li = document.createElement('li')
        li.innerHTML = item + '<button class="float-right">x</button>'
        list.append(li)
    }
}