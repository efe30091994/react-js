import React from "react";

const Result = ({ result, openPopup }) => {
    return <div>
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    </div>
}

export default Result;