import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();

    }, []);
    return (<div> <h1>Detail</h1>
        <h2>Title: {movie.title}</h2>
    <p>Description: {movie.description_full}</p>
        <p>Released year: {movie.year}</p>
    </div>);
}

export default Detail;