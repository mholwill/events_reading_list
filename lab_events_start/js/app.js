document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmit);


})

const handleSubmit = function() {
  const list = document.querySelector('#reading-list')

  const newListItem = document.createElement('li');

  event.preventDefault();
  // console.log(resultParagraph);
  newListItem.textContent = `Title: ${event.target.title.value}`;
  list.appendChild(newListItem);
};
