import React, { Component } from 'react';

class Pager extends Component {
  constructor(props) {
    super(props);

  }

  handleClick(pageno) {
    this.props.onPageChanged(pageno);
  }

  render() {

    let firstPage = null;
    if(Number(this.props.selectedPage) > 1 ) {
      firstPage = (
        <li className="page-item">
          <button className="page-link"
          onClick={event => {this.handleClick(1)}}>First</button>
        </li>
      );
    }
    else {
      firstPage = (
        <li className="page-item disabled">
          <span className="page-link">First</span>
        </li>
      );
    }

    let lastPage = null;
    if(Number(this.props.selectedPage) < 10 ) {
      lastPage = (
        <li className="page-item">
          <button className="page-link"
          onClick={event => {this.handleClick(10)}}>Last</button>
        </li>
      );
    }
    else {
      lastPage = (
        <li className="page-item disabled">
          <span className="page-link">Last</span>
        </li>
      );
    }

    let leftPage = null;
    if(Number(this.props.selectedPage) !== 1 ) {
      leftPage = (
        <li className="page-item">
          <button className="page-link"
          onClick={event => {this.handleClick(event.target.textContent)}}>{this.props.selectedPage - 1}</button>
        </li>
      );
    }

    let rightPage = null;
    if(Number(this.props.selectedPage) !== 10 ) {
      rightPage = (
        <li className="page-item">
          <button className="page-link"
          onClick={event => {this.handleClick(event.target.textContent)}}>{this.props.selectedPage + 1}</button>
        </li>
      );
    }

    return (
      <nav aria-label="Recipe Navigation">
        <ul className="pagination">
          {firstPage}
          {leftPage}
          <li className="page-item active">
            <span className="page-link">
              {this.props.selectedPage}
              <span className="sr-only">(current)</span>
            </span>
          </li>
          {rightPage}
          {lastPage}
        </ul>
      </nav>
    );
  }
}

export default Pager;
