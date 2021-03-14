/* E10
Para o seguinte exercício, considere os array de objetos.

const movies = [
	{ id: 1, name: 'Joker' },
	{ id: 2, name: 'Parasite' },
	{ id: 3, name: 'Avengers' },
	{ id: 4, name: 'Her' }
]
const actors = [
	{ id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
	{ id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
	{ id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
	{ id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
]

Faça uma função que receba 2 parâmetros: um array de movies e um array de actors.
 A função deve retornar um array de movies, onde cada movie possui a propriedade actors, que sera um array com os nomes dos atores. Por ex:

[
	{
		id: 99,
		name: 'Lorem Ipsum',
		actors: ['John Doe', 'Jane Doe']
	}
]

 */

const movies = [
  { id: 1, name: "Joker" },
  { id: 2, name: "Parasite" },
  { id: 3, name: "Avengers" },
  { id: 4, name: "Her" },
];
const actors = [
  { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
  { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
  { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
  { id: 4, name: "Scarlett Johansson", movie_ids: [3] },
];
window.exercise10 = function () {
  console.log("resultado ex10: ");
  console.log(results);
};

const results = movies.map((movie) => {
  const movieActors = actors.find((actor) =>
    actor.movie_ids.find((movie_id) => movie_id === movie.id)
  );

  return {
    ...movie,
    actors:[movieActors.name],
  };
});
