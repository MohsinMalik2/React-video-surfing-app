import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
      return (
          <div>
                {/* Two ways to call an event */}

                <input type="text" onChange={this.onInputChange}/>
                {/* <input type="text" onChange={(e) =>  console.log(e.target.value) }/> */}

                
          </div>
      );
    };

    onInputChange(e){
        console.log(e.target.value);
    }
};