import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import List from './components/list';
import ItemDetails from './components/item_details';
const API_KEY = 'AIzaSyBeMoVU5Wjeg_0mYd5e6BjmVg7hHY60vDc';


class App extends Component {
    
    constructor(props){
        
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('react js');
    }
    
    videoSearch(term){
        YTSearch ({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });    
        });  
    } 
    
    render(){
        
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        
        return	(
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <ItemDetails item={this.state.selectedVideo} />
                <List     
                    onItemSelect={selectedVideo => this.setState({selectedVideo})} 
                    items={this.state.videos}  />
            </div>
        );    
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
