document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmit);
  // const formSelect = document.querySelector('#category');
  // formSelect.addEventListener('select', handleSelect);


})

const handleSubmit = function() {
  const list = document.querySelector('#reading-list');
  const newListItem = document.createElement('li');
  const titleParagraph = document.createElement('p');
  const authorParagraph = document.createElement('p');
  const categoryParagraph = document.createElement('p');

  event.preventDefault();

  titleParagraph.textContent = `Title: ${event.target.title.value}`;
  newListItem.appendChild(titleParagraph);
  authorParagraph.textContent = `Author: ${event.target.author.value}`;
  newListItem.appendChild(authorParagraph);
  categoryParagraph.textContent = `Category: ${event.target.category.value}`;
  newListItem.appendChild(categoryParagraph);

  list.appendChild(newListItem);
};

// const handleSelect = function() {
  // const categoryParagraph = document.createElement('p');
  // categoryParagraph.textContent = `Author: ${event.target.category.value}`;
  // newListItem.appendChild(categoryParagraph);
  // console.log(handleSelect);
// };
