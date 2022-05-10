import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor (props){
        super(props)

        this.state = {term: ''};
    }
    render() {
      return (
          <div className='d-flex mb-5'>
                {/* Two ways to call an event */}

                {/* <input type="text" onChange={this.onInputChange}/> */}
                {/* <input type="text" onChange={(e) =>  console.log(e.target.value) }/> */}

                {/* <input type="text" onChange={(e) =>  this.setState({term: e.target.value}) }/>
                <p>The term value is: {this.state.term}</p> */}

                {/* COntrolled field i.e. value of field controlled by state */}

                <input type="text" className="form-control me-2"
                    value={this.state.term} 
                    onChange={(e) =>  this.setState({term: e.target.value}) }
                />
                <button onClick={e => this.onInputChange(this.state.term)} className="btn btn-success" type="submit">Search</button>
          </div>
      );
    };
    onInputChange(term){
        this.props.onSearch(term);
    }
};