import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {term:  '' };
    }
    componentDidMount(){
        this.nameInput.focus();
    }
    
    render(){
        return (
            <div className="search-bar col-md-12">
                <input 
                    value={this.state.term}
                    placeholder="Search"
                    ref={(input) => { this.nameInput = input; }}
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>       
        );   
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;