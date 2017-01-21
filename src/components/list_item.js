import React from 'react';

const ListItem = ({item, onItemSelect}) => {
    const imageUrl = item.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onItemSelect(item)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{item.snippet.title}</div>
                </div>
            </div>            
        </li>
    );
};

export default ListItem;