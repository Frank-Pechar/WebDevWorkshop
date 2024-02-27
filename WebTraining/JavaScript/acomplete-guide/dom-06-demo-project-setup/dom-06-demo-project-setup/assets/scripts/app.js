'use strict';
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton =
  addMovieModal.getElementsByClassName('btn--passive')[0];
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length > 0) {
    entryTextSection.style.display = 'none';
  } else {
    entryTextSection.style.display = 'block';
  }
};

const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = ({ id, title, imageUrl, rating }) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
		<div class="movie-element__image">
			<img src="${imageUrl}" alt="${title}">
		</div>
		<div class="movie-element__info">
			<h2>${title}</h2>
			<p>${rating}/5 stars</p>
		</div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(this, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => backdrop.classList.toggle('visible');

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  //https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg

  if (
    !titleValue.trim() ||
    !imageUrlValue.trim() ||
    !ratingValue.trim() ||
    ratingValue < 1 ||
    ratingValue > 5
  ) {
    console.log('Ivalid Entry(s)');
  } else {
    const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      imageUrl: imageUrlValue,
      rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(newMovie);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie);
    // renderNewMovieElement(newMovie.title, newMovie.imageUrl, newMovie.rating);
    updateUI();
  }
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

updateUI();
startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
