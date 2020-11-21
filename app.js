const form = document.querySelector('#form')
const items = document.querySelector('#items')
const submit = document.querySelector('#submit')
const list = document.querySelector('#list')


const makeItem = () => {
    let item = items.value
    let itemLi = document.createElement('li')
    itemLi.innerText = item
    list.append(itemLi)
}


const saveToStorage = (item) => {
    let arr = JSON.parse(localStorage.getItem('food')) || []
    arr.push(item)
    console.log(arr)
    localStorage.setItem('food', JSON.stringify(arr))
}

form.addEventListener('submit', e => {
    e.preventDefault()

    makeItem()
    saveToStorage(items.value)
    items.value = ''
})

window.onload= () => {
    
    let data = JSON.parse(localStorage.getItem('food'))
    console.log(data)
    for(let item of data){
        let li = document.createElement('li')
        li.innerText = item
        list.append(li)
    }
}