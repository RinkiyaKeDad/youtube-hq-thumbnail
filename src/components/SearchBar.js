import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});

    };

    onFormSubmit = event => {
        event.preventDefault();
        //call callback function passed through the parrent element
        this.props.onFormSubmit(this.state.term);

    }

    render(){
        return (
        <div className="ui segment search-bar">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Enter Video URL</label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                 </div>   
            </form>
        </div>
        );
    }
}

export default SearchBar;