import axios from 'axios'
import React, { useState } from 'react'

export const OmdbApi = () => {
    const [searchData, setsearchData] = useState([])
    const getApiData = async () => {

        const url ="http://www.omdbapi.com"

        const res = await axios.get(url,{
            params:{
                "apikey":"9d57be0b",
                "s":"avengers"
            }
        })
        console.log("Res...",res)
        setsearchData(res.data.Search)


    }

    const fetchMovieDetail = async (id) => {
        const url ="http://www.omdbapi.com"

        const res = await axios.get(url,{
            params:{
                "apikey":"9d57be0b",
                "i":id
            }
        })
        console.log("Res...",res)
    }
  return (
    <div>OmdbApi

        <button onClick={getApiData}>Get Data</button>
        <ul>
            {
                searchData?.map((movie)=>{
                    return<li>
                        <img src={movie.Poster} alt=""/>
                        <h2>{movie.Title}</h2>
                        <button onClick={()=>{fetchMovieDetail(movie.imdbID)}}><h3>{movie.imdbID}</h3></button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
