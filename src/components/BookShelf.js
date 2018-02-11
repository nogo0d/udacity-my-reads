import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShelfChanger from '../components/ShelfChanger';



class BookShelf extends React.Component {

    render() {

        let olClasses = classNames({
            'bookshelf-books': true,
            'is-visible': this.props.books.length > 0
        });

        return (
            <div className={olClasses}>
                <ol className="books-grid">
                    {
                        this.props.books.map(book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }} />
                                        <ShelfChanger
                                            shelf={book.shelf}
                                            shelfs={this.props.shelfs}
                                            book={book}
                                            onBookMove={this.props.onBookMove} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }

}

BookShelf.propTypes = {
    shelfs: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onBookMove: PropTypes.func.isRequired
};

export default BookShelf