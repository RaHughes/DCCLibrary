import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
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

    render() {
        return(
            <div className='container-fluid'>
                <TitleBar />
                <div className='row'>
                    <div className='col-md-4'>
                    <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className='col-md-4'>
                        <h1> {this.books[this.state.bookNumber].title} </h1>
                        <h4> {this.books[this.state.bookNumber].author} </h4>
                    </div>
                    <div className='col-md-4'>
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;