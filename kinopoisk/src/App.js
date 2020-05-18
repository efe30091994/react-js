import React, {useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Search from "./Components/Search";
import Results from "./Components/Results";
import Popup from "./Components/Popup";
import Navigation from "./Components/Navigation";
import {Jumbotron, Pagination} from "react-bootstrap";
import Pagin from "./Components/Pagination";


const App = () => {

    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });

    const apiUrl = "http://www.omdbapi.com/?apikey=dfe6d885";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiUrl + "&s=" + state.s).then(({data}) => {
                let results = data.Search;

                setState(prevState => {
                    return {...prevState, results: results}
                })
            });
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;// значение то что мы вводим

        setState(prevState => {
            return {...prevState, s: s}
        });
    }

    const openPopup = id => {
        axios(apiUrl + "&i=" + id).then(({data}) => {
            let result = data;

            console.log(result);

            setState(prevState => {
                return {...prevState, selected: result}
            });
        });
    }

    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}}
        });
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage, setMoviePerPage] = useState(10);

    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    const currentMovies = state.results.slice(indexOfFirstMovie,indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="App">
            <Navigation/>
            <div className="container">
                <Jumbotron>
                    <header>
                        <h1>List of films</h1>
                    </header>
                    <main>
                        <Search handleInput={handleInput} search={search}/>
                        <Results results={currentMovies} openPopup={openPopup}/>
                        {(typeof state.selected.Title != "undefined") ?
                            <Popup selected={state.selected} closePopup={closePopup}/> : false}
                    </main>
                </Jumbotron>
                <div>
                    <Pagin moviePerPage={moviePerPage} totalMovies={state.results.length} paginate={paginate}/>
                </div>
            </div>
        </div>
    );
}

export default App;
