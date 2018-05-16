
const form = document.querySelector("#newRec")

form.addEventListener('submit', function(ev){

    ev.preventDefault()

    const allTheRec = document.querySelector("#all")

    const newItem = {
        'Title': form.title.value,
        'Genre': form.genre.value,
    }

    allTheRec.appendChild(renderlist(newItem))

    form.reset()
    form.title.focus()

})

function renderlist(movie){
    
    const list = document.createElement('dl')

    //call renderListItem for name and age and color
    Object.keys(movie).map(function(label){
        const item = renderListItem(label, movie[label])
        list.appendChild(item);
    })

    return list
  }

  function renderListItem(label, item){
        //creates a list item and returns it 
    const element = document.createElement('li')
    
    const term = document.createElement('dt')
    term.textContent = label

    const descript = document.createElement('dd')
    descript.textContent = item

    element.appendChild(term)
    element.appendChild(descript)

  return element
}


function openList(type) {
    let i
    let x = document.getElementsByClassName("tabcontent")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    document.getElementById(type).style.display = "block"
}

