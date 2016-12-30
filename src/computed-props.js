const computedPropsComponent = new Vue({
    el: '#computed-props-component',
    data: {
        title: 'Computed properties',
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
        ],
        avgScore: 0,
        totalMovies: 0
    },
    methods: {
        addScore: function(index, value) {
            this.movies = this.movies.map((movie, i) => {
                if (index === i) {
                    movie.score += value;
                }
                return movie;
            });
        }
    },
    computed: {
        avgScore: function() {
            return this.movies.reduce((sum, movie) => {
                return sum + movie.score;
            }, 0) / this.totalMovies;
        },
        totalMovies: function() {
            return this.movies.length;
        }
    }
});