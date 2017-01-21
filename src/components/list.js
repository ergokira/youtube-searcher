import React from 'react';
import ListItem from './list_item';

const List = (props) => {
    
    const listItems = props.items.map((item) =>{
        return (
        <ListItem
            onItemSelect={props.onItemSelect}
            key={item.etag} 
            item={item} />);
    });
    return (
        <ul className="col-md-4 list-group">
        {listItems}
        </ul>
    );
};

export default List;