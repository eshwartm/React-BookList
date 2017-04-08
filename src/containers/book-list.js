import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
          {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here will show up
  // as props inside BookList
  return {
    books: state.books
  };
}

// Anything returned on this function will end up as props on the
// BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed on
  // to all of our reducers
  // Basically now we can call this.props.selectBook in BookList container
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList to a container
// It needs to know about this new dispatch method called "selectBook"
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);