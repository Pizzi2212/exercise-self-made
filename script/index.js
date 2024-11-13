const getData = () => {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
      console.log('response')
      if (response.ok) {
        return response.json()
      } else {
        return new Error('errore')
      }
    })
    .then((books) => {
      console.log(books)
      const booksSection = document.getElementById('books-section')
      books.forEach((p) => {
        // p=parametro
        const bookCards = document.createElement('div')
        bookCards.classList.add(
          'col',
          'col-sm-6',
          'col-md-6',
          'col-lg-4',
          'col-xl-3',
          'mt-5'
        )
        bookCards.innerHTML = `
<div class="card h-100">
  <img src="${p.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.category}</p>
    <p class="card-text">${p.price}$</p>
    <div class="mt-auto">
    <button class="btn btn-info buy">Buy</button>
    <button onclick="Deleter(event)" class="btn btn-danger">Delete</button>
    </div>
    
  </div>
</div> 
      `
        booksSection.appendChild(bookCards)
      })
    })

    .catch((error) => {
      console.log(error)
    })
}

getData()

const key = 'buyBook'

const Deleter = (e) => {
  e.target.closest('.card').classList.add('d-none')
}

window.addEventListener('scroll', (e) => {
  const navbar = document.getElementById('headNav')
  const scrollP = 300
  if (scrollY > scrollP) {
    navbar.classList.add('modScroll')
  } else {
    navbar.classList.remove('modScroll')
  }
})
