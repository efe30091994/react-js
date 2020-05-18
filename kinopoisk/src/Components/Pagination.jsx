import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Pagination} from "react-bootstrap"

const Pagin = ({moviePerPage,totalMovies,paginate}) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMovies/moviePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination className="justify-content-center" size="lg">
            {pageNumbers.map(number => (
                <a key={number} onClick={()=> paginate(number)} href="!#" className="page-link">{number}</a>
            ))}
        </Pagination>
    )
}

export default Pagin;