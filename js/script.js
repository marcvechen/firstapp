"use strict";

const numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("какой последний фильм?", ""),
  b = prompt("его оценка", ""),
  c = prompt("какой последний фильм?", ""),
  d = prompt("его оценка", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
