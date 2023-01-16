const bookContainer = document.querySelector('#books-container');
const button = document.querySelector('button[type=button]');
const formContainer = document.querySelector('.fixed-container');
const form = document.querySelector('form');

function Book() {
  this.bookDiv = document.createElement('div');
  this.title = document.createElement('div');
  
  this.authorInfo = document.createElement('div');
  this.author = document.createElement('div');
  this.author.classList.add('authorName');
  this.authorInfo.append('Write by ', this.author);
  
  this.pages = document.createElement('div');
  
  this.readButton = document.createElement('button');
  this.readButton.addEventListener('click', () => {
      this.toggleReadButton();
  });
  
  this.removeButton = document.createElement('button');
  this.removeButton.innerText = 'Remove';
  this.removeButton.addEventListener('click', () => {
    this.bookDiv.remove();
  });
  
  bookContainer.insertBefore(this.bookDiv, document.querySelector('#books-container > div'));
};

Book.prototype.insert = function() {
  this.bookDiv.append(
    this.title,
    this.authorInfo,
    this.pages,
    this.readButton,
    this.removeButton,
    );
};

Book.prototype.addValues = function(title, author, pages, read) {
  this.title.innerText = title;
  this.author.innerText = author;
  this.pages.innerText = pages;
  this.readButton.value = read;
  this.readButton.innerText = (read === 'true') ? 'Read' : 'Not read';
  this.readButton.style.backgroundColor = (read === 'true') ? 'green' : 'red';
  return this;
};

Book.prototype.toggleReadButton = function() {
  if (this.readButton.value === 'true') {
      this.readButton.value = 'false';
      this.readButton.innerText = 'Not read';
      this.readButton.style.backgroundColor = 'red';
  } else {
      this.readButton.value = 'true';
      this.readButton.innerText = 'Read';
      this.readButton.style.backgroundColor = 'green';
  }
};

button.addEventListener('click', () => {
  formContainer.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formContainer.classList.add('hidden');
  
  const b = new Book()
  b.addValues(
    form[0].value,
    form[1].value,
    form[2].value + ' pages',
    (form[3].checked) ? 'true' : 'false',
    ).insert();
});