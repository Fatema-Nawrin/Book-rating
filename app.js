const addBook = () => {
    const nameField = document.getElementById('book-name');
    const ratingField = document.getElementById('rating');
    const name = nameField.value;
    const rating = ratingField.value;
    if (!name || !rating) {
        alert('Please, enter both input.')
        return;
    }
    // display in UI 
    displayBook(name, rating);
    // add in localStorage 
    addBookToStorage(name, rating);
    nameField.value = '';
    ratingField.value = '';
}
const displayBook = (name, rating) => {
    const ul = document.getElementById('books');
    const li = document.createElement('li');
    li.innerText = `${name}- ${rating} `;
    ul.appendChild(li);
}
const getList = () => {
    const list = localStorage.getItem('list');
    let listObj;
    if (list) {
        listObj = JSON.parse(list);
    }
    else {
        listObj = {};
    }
    return listObj;
}
const addBookToStorage = (name, rating) => {
    const list = getList();
    list[name] = rating;
    const listStringified = JSON.stringify(list);
    localStorage.setItem('list', listStringified);
}
const displayLocalStorageList = () => {
    const list = getList();
    for (const name in list) {
        displayBook(name, list[name]);
    }
}
displayLocalStorageList();
