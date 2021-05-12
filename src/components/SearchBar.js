import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Youtube videos search</label>
          <input
            type="text"
            placeholder="Busqueda"
            value={this.state.term}
            onChange={(evt) => this.setState({ term: evt.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
