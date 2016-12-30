const inputsComponent = new Vue({
    el: '#inputs-component',
    data: {
        title: 'Inputs',
        checked: false,
        movies: [ 'Alien', 'Matrix', 'Terminator' ],
        chosenMovie: '',
        genres: [
            { name: 'sci-fi', id: 1 },
            { name: 'fantasy', id: 2 },
            { name: 'action', id: 3 }
        ],
        selectedGenres: [],
        singleLine: '',
        multiLine: ''
    }
});