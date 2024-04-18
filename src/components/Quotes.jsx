import React from 'react'
import logo from './images/logo.png'

let quotes = 
[
"“People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.”", 
"“Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.”",
"“Life is what happens to us while we are making other plans.”",
"“Life isn’t about finding yourself. Life is about creating yourself.”",
"“You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.”",
"“Doubt kills more dreams than failure ever will.”",
"“Keep your face always toward the sunshine, and shadows will fall behind you.”",
];

let authors = [
"Carrie Ann Moss",
"Lady Gaga",
"Allen Saunders",
"George Bernard Shaw",
"Maya Angelou",
"Suzy Kassem",
"Walt Whitman"
];

class Quotes extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: "",
			author: ""
		}
		this.newQuote = this.newQuote.bind(this)
	}

	newQuote(){
		let randomNumber = Math.floor(Math.random() * (quotes.length));
		this.setState({text : quotes[randomNumber]});
		this.setState({author: authors[randomNumber]});
	}

	render(){
		return (
			<div id="wrapper" className="quotes-wrapper" onLoad={this.newQuote}>
          		<div id="quote-box" className="box">
            		<div id="text" className="quote-text">{this.state.text}</div>
            		<div id="author" className="quote-author">- {this.state.author}</div>
            		<div id="buttons" className="quote-buttons">
            			<a id="tweet-quote" className="twitter" title="Tweet this quote!" href="twitter.com/intent/tweet" target="_blank" rel="noreferrer"><img id="twitter-logo" className="twitter-img" alt="Twitter" src={logo} /></a>
              			<button id="new-quote" className="new-quote-btn" onClick={this.newQuote}>New quote!</button>
            		</div> 
          		</div>
			</div>
		)
	}
}

export default Quotes