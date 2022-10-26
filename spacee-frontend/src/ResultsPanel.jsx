import React, { useState } from "react";
function ResultsPanel(props){
    return (
        <div className="results-panel">
            {props.images}
        </div>
    )
}
export default ResultsPanel;