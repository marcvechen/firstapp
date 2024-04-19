"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("какой последний фильм?", ""),
        b = prompt("его оценка", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмом");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      //(let i = 1; i <= 2; i++)
      let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
      if (genre === "" || genre === null) {
        console.log("вы ввели неправильные данные");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
      // let genres = prompt(`введите ваши жанры через запятую ${i}`).toLowerCase();
      // if (genres === "" || genres === null) {
      //   console.log("вы ввели неправильные данные");
      //   i--;
      // } else {
      //   personalMovieDB.genres = genres.split(', )
      //  personalMovieDB.genres.sort();
      // }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
