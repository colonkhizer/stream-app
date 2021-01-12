import React from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import {useState ,useEffect} from 'react'
import axios from '../axios'
import request from '../request'

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requestURL  = await axios.get(request.fetchActionMovies)
            console.log(requestURL)
        }

        fetchData()
    }, []);

    return (
        <div className="results">
        {
            movies.map((movie) => (
            <VideoCard/>
            ))
        }
        </div>
    )
}

export default Results
