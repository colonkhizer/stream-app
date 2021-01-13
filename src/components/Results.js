import React from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import {useState ,useEffect} from 'react'
import axios from '../axios'
import request from '../request'
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requestURL  = await axios.get(selectedOption)
            setMovies(requestURL.data.results)
            return requestURL
        }

        fetchData()
    }, [selectedOption]);

    return (
        <div className="results">
        <FlipMove>
        {
            movies.map((movie) => (
            <VideoCard key={movie.id} movie={movie}/>
            ))
        }
        </FlipMove>
        </div>
    )
}

export default Results
