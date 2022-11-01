import React, { useState } from "react";
function ResultsPanel(props){
    return (
        <div id="results-panel">
            <h1>Results</h1>
            {props.images}
        </div>
    )
}
export default ResultsPanel;