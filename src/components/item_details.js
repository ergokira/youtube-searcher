import React from 'react';

const ItemDetails = ({item}) => {
    if(!item) {
        return <div>Loading...</div>;
    }
    const videoId = item.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowFullScreen="allowfullscreen"></iframe>
            </div>
            <div className="details">
                <div>{item.snippet.title}</div>
                <div>{item.snippet.description}</div>            
            </div>
        </div>
    );
};

export default ItemDetails;