import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer'
import CreateBook from './CreateBook/CreateBook';
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.books = [
            {title: "Starship Troopers", author: "Robert A. Heinlein"},
            {title: "Legend of Drizzt", author: "R.A. Salvatore"},
            {title: "Eragon", author: "Christopher Paolini"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++
        if(tempBookNumber === this.books.length) {
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--
        if(tempBookNumber === -1) {
            tempBookNumber = (this.books.length - 1)
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    createBook = (newBook) => {
        this.books.push(newBook)
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render() {
        return(
            <div className='container-fluid body'>
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>
                <CreateBook createNewBook={this.createBook}/>
                <Footer />
            </div>
        )
    }
}

export default App;