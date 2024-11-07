import React, { Component } from 'react';
import styles from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  OnSubmit = () => {
    const { inputValue } = this.state;
    this.props.OnSubmit(inputValue);
  };
  handleInputChange = ev => {
    const { value } = ev.target;
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault();
            this.OnSubmit();
          }}
        >
          <button type="submit" className={styles.searchbutton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
