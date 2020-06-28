const addToLibraryBtn = document.querySelector(".addToLibrary-btn");
const submitBtn = document.querySelector("#submit");

let myLibrary = [
  {
    title: "Book 1",
    author: "John Doe",
    pages: 100,
  },
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function makeTable() {
  const container = document.querySelector(".container");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thTitle = document.createElement("th");
  const thAuthor = document.createElement("th");
  const thPages = document.createElement("th");

  table.setAttribute("id", "table");
  thead.setAttribute("id", "thead");

  thTitle.textContent = "Title";
  thAuthor.textContent = "Author";
  thPages.textContent = "Pages";

  tr.appendChild(thTitle);
  tr.appendChild(thAuthor);
  tr.appendChild(thPages);
  thead.appendChild(tr);
  table.appendChild(thead);
  container.appendChild(table);
}

function render() {
  deleteTable();
  makeTable();

  const thead = document.querySelector("#thead");

  for (let i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement("tr");
    let deleteBook = document.createElement("button");

    deleteBook.setAttribute("id", "deleteBtn");
    deleteBook.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBook.value = i;
    deleteBook.addEventListener("click", () => {
      myLibrary.splice(deleteBook.value, 1);
      render();
    });

    let key = 0;
    let count = 0;

    for (key in myLibrary[i]) {
      let td = document.createElement("td");

      if (myLibrary[i].hasOwnProperty(key)) {
        let tdText = document.createTextNode(myLibrary[i][key]);
        td.appendChild(tdText);
        count++;
      }

      tr.appendChild(td);
      tr.appendChild(deleteBook);
    }

    thead.appendChild(tr);
  }
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
  render();
}

function deleteTable() {
  const removeTable = document.querySelector("#table");
  removeTable.remove();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitForm() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let clearForm = document.querySelector("form ");

  addBookToLibrary(title, author, pages);
  title.value = "";
  author.value = "";
  pages.value = "";

  closeForm();
  clearForm.reset();
}

addToLibraryBtn.addEventListener("click", () => openForm());
submitBtn.addEventListener("click", () => submitForm());

makeTable();
render();