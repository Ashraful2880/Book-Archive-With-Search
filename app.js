

// //-------- Function For Event Handler And Fetch API ----------// //

const searchBook = () => {
    const inputValue = document.getElementById('search-field').value;
    document.getElementById('search-field').value = '';
    const url = (`https://openlibrary.org/search.json?q=${inputValue}`);
    fetch(url)
        .then(res => res.json())
        .then(data => bookDetails(data.docs))
    //--//-----Warning Alert For Empty Input -------//--//--//
    if (inputValue === "") {
        alert("Enter a Book Name")
    }
}

//--//--//-----Function For Transfer API Data And Set Dynamic Element --------//--//--//--

const bookDetails = books => {
    const container = document.getElementById('container-div');
    const searchMessage = document.getElementById('result-message');
    container.textContent = "";
    // Condition For Check Array Length
    if (books.length > 0) {
        searchMessage.innerText = `${books.length} Books Found`
    } else {
        searchMessage.innerText = "No Books Found"
    }

    books.forEach(book => {
        const col = document.createElement('col');
        container.appendChild(col);
        col.innerHTML = `
            <div class="card h-100" >
                 <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top h-100" alt="Card-Image">
                    <div class="card-body">
                        <h5 class="card-title">Book Name: ${book.title}</h5>
                        <h6>Author: ${book.author_name}</h6>
                         <p class="card-text"><span class="text-warning fw-bold">Publisher:</span> ${book.publisher}</p>
                         <p class="card-text"><span class="text-primary fw-bold">First Publish:</span> ${book.first_publish_year}</p>
                     </div>
            </div>
         `
    })
}