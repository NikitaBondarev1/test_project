"use strict";
// ПРАКТИКА Ч.1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count:numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      numberOfFilms.movies[a] = b;
      numberOfFilms.movies[c] = d;

      console.log(personalMovieDB);