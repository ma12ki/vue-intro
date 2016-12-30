const movieVoterComponent = {
    template: '#movie-voter',
    props: ['title', 'initialVotes'],
    data: function() {
        this.$emit('increment', this.initialVotes);
        return {
            votes: this.initialVotes
        };
    },
    methods: {
        increment: function() {
            this.votes += 1;
            this.$emit('increment', 1);
        }
    }
};

const movieShowComponent = {
    template: '#movie-show',
    props: ['title', 'director']
};

const reusableComponentsComponent = new Vue({
    el: '#reusable-components-component',
    data: {
        title: 'Reusable and dynamic components',
        currentView: 'movie-voter',
        toggleLabel: 'View',
        totalVotes: 0,
        movies: [
            {
                title: 'Alien',
                director: 'Ridley Scott',
                votes: 123
            },
            {
                title: 'Terminator',
                director: 'James Cameron',
                votes: 55
            },
            {
                title: 'Matrix',
                director: 'The Wachowskis',
                votes: 12
            },
            {
                title: 'Blade Runner',
                director: 'Ridley Scott',
                votes: 6
            }
        ],
    },
    methods: {
        toggleView: function() {
            this.currentView = this.currentView === 'movie-show' ? 'movie-voter' : 'movie-show';
        },
        incrementTotalVotes: function(amount) {
            this.totalVotes += amount;
        }
    },
    computed: {
        toggleLabel: function() {
            return this.currentView === 'movie-show' ? 'Edit' : 'View';
        }
    },
    components: {
        'movie-voter': movieVoterComponent,
        'movie-show': movieShowComponent
    }
});