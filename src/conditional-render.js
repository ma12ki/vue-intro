const conditionalRenderComponent = new Vue({
    el: '#conditional-render-component',
    data: {
        title: 'Conditional rendering',
        movies: [
            {
                title: 'Alien',
                score: 10
            },
            {
                title: 'terminator',
                score: 8
            },
            {
                title: 'Matrix',
                score: 9
            },
            {
                title: 'blade Runner',
                score: 7
            }
        ]
    },
    methods: {
        addMovie: function() {
            const input = document.getElementById('conditionalRenderMovieName');

            if (input.value !== '') {
                this.movies.push({
                    title: input.value,
                    score: 5
                });

                input.value = '';
            }
        },
        deleteMovie: function(index) {
            this.movies = this.movies.filter((movie, i) => {
                return i !== index;
            });
        },
        addScore: function(index, value) {
            this.movies = this.movies.map((movie, i) => {
                if (index === i) {
                    movie.score += value;
                }
                return movie;
            });
        }
    }
});