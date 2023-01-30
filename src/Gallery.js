import React from "react";
import './App.css';

const Gallery = ({data}) => {
    return(
        <div className="container">
            <div className="row">
             {data.map((image) =>
             <div key={image.id}>
                <div className="col-md-4 img-space">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                    height="200"
                    width="250" alt={image.title}/>

                </div>
                </div> )}
             </div>
        </div>
    )
}
export default Gallery