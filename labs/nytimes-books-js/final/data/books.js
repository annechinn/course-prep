async function getBooks () {
    
    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
    const books = response.data.results.books;
    // console.log(`GET books`, books);
    return books;
};

// function getBooks () {
    
//     const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8";
//     return axios.get(url).then((response)=> {
//         const books = response.data.results.books;
//         return books;
//     })
// };