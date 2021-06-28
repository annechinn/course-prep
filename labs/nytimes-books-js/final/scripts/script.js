function getHTMLForBookSummary(book) {
  return `
    <div class="book">
      <a href="${book.amazon_product_url}"><img src="${book.book_image}" alt="" /></a>
      
      <h3><a href="${book.amazon_product_url}"><span class="rank">${book.rank}</span> - ${book.title}</a></h3>
      <div class="profile">Written by ${book.author}</div>
      <p>${book.description}</p>
    </div>
  `;
}

async function showBooks() {
  let element = document.getElementById("book-grid");
  let books = await getBooks();
  element.innerHTML = books
            .map(x=>getHTMLForBookSummary(x))
            .join("");
}

// function showBooks() {
//   let element = document.getElementById("book-grid");
//   getBooks().then((books)=> {
//     element.innerHTML = books
//     .map(x=>getHTMLForBookSummary(x))
//     .join("");
//   })
// }

showBooks();