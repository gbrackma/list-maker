
const form = document.querySelector("#newRec")
let array = new Array();

form.addEventListener('submit', function(ev){

    ev.preventDefault()

    const allTheRec = document.querySelector("#all")

    const newItem = {
        'Title': form.title.value,
        'Genre': form.genre.value,
    }

    addToGenreList(newItem)
    allTheRec.appendChild(renderlist(newItem))
    array.push(newItem)

    form.reset()
    form.title.focus()

})

function renderlist(movie){
    
    const list = document.createElement('dl')
    const dButton = document.createElement('button')
    dButton.addEventListener('click', handleDelete)
    dButton.textContent = 'Delete'

    //call renderListItem for name and age and color
    Object.keys(movie).map(function(label){
        const item = renderListItem(label, movie[label])
        list.appendChild(item);
        list.appendChild(dButton)
    })

    

    return list
  }

  function handleDelete(ev){

      ev.preventDefault()
      const thing = ev.target
      //remove from array

      let i
      for(i =0; i < array.length; i++){
          if( `Title${array[i].Title}Genre${array[i].Genre}Delete` == thing.parentNode.textContent){
            array.splice(i, 1);
            break
          }
      }
      //removeFromArray(thing)

    thing.parentNode.remove()
  }


/*
  function removeFromArray(item){

      let indexOfGenre = item.parentNode.textContent.indexOf('Genre')
      let title = item.parentNode.textContent.substring(5, indexOfGenre)
      let genre = item.parentNode.textContent.substring( (indexOfGenre+5), (item.parentNode.textContent.length-6) )

    const search = {
        'Title': title,
        'Genre': genre,
    }


    debugger
    let index = array.indexOf(search);

    if (index > -1) {
        array.splice(index, 1);
    }   
    

  }
  */

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

function addToGenreList(item){
    const theGenre = document.querySelector(`#${item.Genre}`)

    const list = document.createElement('dl')
    const dButton = document.createElement('button')
    dButton.addEventListener('click', handleDelete)
    dButton.textContent = 'Delete'

    Object.keys(item).map(function(label){
        const createdItem = renderListItem(label, item[label])
        list.appendChild(createdItem);
        list.appendChild(dButton)
    })
    
    theGenre.appendChild(list)
}
 /*
function displayGenre(type){

    //get array of all the type
    let arrayOfType = array.filter(function(currentItem){
        return ( type == currentItem.Genre)
     })

    const theGenre = document.querySelector(`#${type}`)

    const list = document.createElement('dl')
    const dButton = document.createElement('button')
    dButton.addEventListener('click', handleDelete)
    dButton.textContent = 'Delete'

    Object.keys(arrayOfType).map(function(label){
        const item = 
        list.appendChild(item);
        list.appendChild(dButton)
    })

    theGenre.appendChild(list)
}
*/

