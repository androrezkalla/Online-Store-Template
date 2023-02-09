const ArrayReduce = () => {

    const movies = [
        {
            title: 'Parasite',
            runTime: 132,
        },
        {
            title: 'Metropolis',
            runTime: 153,
        },
        {
            title: 'Das Boot',
            runTime: 150,
        },
    ];

    const totalRuntime = movies.reduce((accumulator, movie) => {
        return accumulator + movie.runTime;
    }, 0);

    const movieNames = movies.reduce((accumulator, movie, i, movies) => {
        return `
            ${accumulator}
            ${i === 0 ? '' : ', '}
            ${i === movies.length - 1 ? 'and ' : ''}
            ${movie.title}`;
    }, '');


    return  <div>
                <p className="text-center">Movie total length is {totalRuntime} minutes.</p>
                <p className="text-center">The movies, by the way are {movieNames}</p>
            </div>
}

export default ArrayReduce;