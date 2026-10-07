const books = [
    {
        title: "The Famished Road",
        author: "Ben Okri",
        category: "Fiction",
        year: 1991,
    },
    
    {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    category: "Fiction",
    year: 1966,
    },

    {
        title: "No Longer at Ease",
        author: "Chinua Achebe",
        category: "Fiction",
        year: 1966,
    },

    {
        title: "Purple Hibiscus",
        author: "Chimamanda Ngozi Adichie",
        category: "Fiction",
        year: 1966,
    },

    {
        title: "The Concubine",
        author: "Elechi Amadi",
        category: "Fiction",
        year: 1966,
    },

    {
        title: "Efuru",
        author: "Flora Nwapa",
        category: "Fiction",
        year: 1968,
    },

    {
        title: "Ake: The Years of Childhood",
        author: "Wole Soyinka",
        category: "History",
        year: 1981,
    },

    {
        title: "The Origin of Species",
        author: "Charles Darwin",
        category: "Science",
        year: 1859,
    },

    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        year: 1988,
    },
];


const findBook = () => {
    let userInput = document.getElementById('user').value;
    let displayArea = document.getElementById('display');
    if (userInput == ''){
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000);
    } else {
        let availableBook = books.find((book) => {
            return book.title.toLowerCase().trim() == userInput.toLowerCase().trim();
        });

        if(availableBook) {
            displayArea.innerHTML = `
            <div class="col-md-6 col-lg-6 mx-auto">

                <div class="book-card">

                    <div class="book-card-top">
                        <div class="book-icon"><img src="fluent-emoji-flat--books.svg" alt="" width="30px"></div>
                    </div>

                    <div class="book-card-body">

                        <h3>${availableBook.title}</h3>

                        <p>
                            <strong>Author:</strong> 
                            ${availableBook.author}
                        </p>

                        <p>
                            <strong>Category:</strong> 
                            ${availableBook.category}
                        </p>

                        <p>
                            <strong>Year:</strong> 
                            ${availableBook.year}
                        </p>

                    </div>

                </div>

            </div>
            `

            
            user.value = '';
        } else{
            errorMsg.innerHTML = `<h1>Book not find or book not avaible</h1>`
            errorMsg.style.display = "block"
            setTimeout(() => {
                errorMsg.style.display = "none"
            }, 3000);
        }
    }
}

const displayBooks = () => {
    let bookContainer = document.getElementById('bookContainer');
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        bookContainer.innerHTML += `
        <div class="col-md-6 col-lg-4">

                <div class="book-card">

                    <div class="book-card-top">
                        <div class="book-icon"><img src="fluent-emoji-flat--books.svg" alt="" width="30px"></div>
                    </div>

                    <div class="book-card-body">

                        <h3>${element.title}</h3>

                        <p>
                            <strong>Author:</strong> 
                            ${element.author}
                        </p>

                        <p>
                            <strong>Category:</strong> 
                            ${element.category}
                        </p>

                        <p>
                            <strong>Year:</strong> 
                            ${element.year}
                        </p>

                    </div>

                </div>

            </div>
        `;
    }
};

displayBooks();

