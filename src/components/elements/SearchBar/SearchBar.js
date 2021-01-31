import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.timeout = null;
  }

  doSearch = (event) => {
    this.setState({
      value: event.target.value,
    });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome
            className="rmdb-fa-search"
            name="search"
            size="2x"
          ></FontAwesome>
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="search"
            onChange={this.doSearch}
            value={this.state.value}
          ></input>
        </div>
      </div>
    );
  }
}

export default SearchBar;
