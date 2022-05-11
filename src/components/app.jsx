import React, { Component } from 'react';
import SearchBar from './search_box';
import YTdata from 'youtube-api-search';
import VideoList from './video_list';
import NavBar from './nav_bar';
import FootBar from './foot_bar';
import VideoDetail from './video_detail';

const API_KEY = "AIzaSyAziaEE_Z45xfYoCZ-PH8IPBXh8mHUmrKE" ;


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchTerm('subway');
    

  }

  searchTerm(term){
    YTdata({key: API_KEY, term: term },(data) => {
      this.setState(
          {
            videos : data,
            selectedVideo: data[0]
          }
        );
    });
  };

  render() {
    return (
      <div className="container-fluid" style={{height:"100vh"}}>
          <NavBar/>

          <div className='mt-5 mb-5' >
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                  <SearchBar  onSearch = {term => {this.searchTerm(term)}}/>
              </div>
              <div className="col-md-3"></div>
            </div>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})
              }
              videos={this.state.videos}/>
          </div>


      </div>
      
      
    );
  }
}
