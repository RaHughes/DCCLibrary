import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.books = [
            {title: "Startship Troopers", author: "god"},
            {title: "Legend of Drizzt", author: "RA Salvatore"},
            {title: "Morellonomicon", author: "Veigar"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render() {
        return(
            <div className='container-fluid'>
                <TitleBar />
                <div className='col-md-4'>
                    Previous Book
                </div>
                <div className='col-md-4'>
                    <h1> {this.books[this.state.bookNumber].title} </h1>
                    <h4> {this.books[this.state.bookNumber].author} </h4>
                </div>
                <div className='col-md-4'>
                    Next Book
                </div>
            </div>
        )
    }
}

export default App;