"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
    musicAlbums: [
        { title: 'The Game', artist: 'Queen', year: 1980 },
        { title: "Master of puppets", artist: "Metallica", year: 1986 },
        { title: "The bridge", artist: "Sting", year: 2021 }
    ],

    *[Symbol.iterator]() {
        for (const album of this.musicAlbums) {
            yield `${album.title} - ${album.artist} (${album.year})`;
        }
    }
}

for (const album of musicCollection) {
    console.log(album);
}
