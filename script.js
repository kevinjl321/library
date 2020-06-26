const button = document.getElementById("button");
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const table = document.querySelector("table");

let myLibrary = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 300,
    },
    {
        title: "Harry Potter?",
        author: "JK Rowling",
        pages: 300,
    },
    {
        title: "Harry Potter!",
        author: "JK Rowling",
        pages: 300,
    }
];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function render(){
    for(let i = 0; i < myLibrary.length; i++){
        let title = table.insertRow(0);
        let author = table.insertRow(1);
        let pages = table.insertRow(2);

        title.innerHTML = (myLibrary[i].title);
        author.innerHTML = (myLibrary[i].author);
        pages.innerHTML = (myLibrary[i].pages);
    }
}

function submitBook(){
    let title = document.getElementById("title").nodeValue;
    let author = document.getElementById("author").nodeValue;
    let pages = document.getElementById("pages").nodeValue;

    addBookToLibrary(title, author, pages);
    
    title = "";
    author = "";
    pages = "";
    
    form.reset();
    closeForm();
}

function addBookToLibrary(title, author, pages){
    myLibrary.push(new Book(title, author, pages));
}

function openForm() {
    document.querySelector(".add-book").style.display = "block";
}
  
function closeForm() {
    document.querySelector(".add-book").style.display = "none";
}


button.addEventListener("click", openForm);
submit.addEventListener("click", submitBook);

render();
console.log(myLibrary);

