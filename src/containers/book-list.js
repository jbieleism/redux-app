import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //function from /actions/index
import { bindActionCreators } from 'redux'; //ensures action generated flows through reducers

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return <li key={book.title} className="list-group-item">{book.title}</li>
    })
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

//anything returned from this function will end up as props on BookList Container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps )(BookList)






















