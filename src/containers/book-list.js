import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      );
    }); 
  };

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
// The purpose of this function is to take our application's state. Whatever is returned from here will show up as props inside of BooksList. It will be this.props
  return {
    books: state.books
  }
}



//Anything returned from the mapDispatchToProps function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed down to all of our reducers. That's what bindActionCreators is doing here with the dispatch. It's saying: I'm going to take all this stuff and make sure it gets passed on to all the reducers in the application. 
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);