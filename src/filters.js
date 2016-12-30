const filtersComponent = new Vue({
    el: '#filters-component',
    data: {
        title: 'Filters',
        movies: [
            {
                title: 'Alien',
                year: 1979
            },
            {
                title: 'terminator',
                year: 1984
            },
            {
                title: 'Matrix',
                year: 1999
            },
            {
                title: 'blade Runner',
                year: 1982
            },
        ]
    },
    filters: {
        capitalize: (value) => {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        lowercase: (value) => {
            if (!value) return '';
            value = value.toString();
            return value.toLowerCase();
        },
        imdbSearchUrl: (term) => {
            if (!term) return '';
            term = term.toString();
            return `http://www.imdb.com/find?q=${term}`;
        }
    }
});