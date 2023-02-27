import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      num: "Spin me",
      magicNumber: 0,
      value: "",
      chances: 3
    };

 
    this.guess = this.guess.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  makeNumber() {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ num : rand });
  }

  guess(e){
    this.makeNumber();
    this.setState({
      chances: this.state.chances -1
    })
    console.log(this.state);
  }

  refreshPage(){
    setInterval(function () {               // Refresh the Page
      window.location.reload(true);         // after 1 second 
    }, 1500);   
    
  }

  handleChange(e){
    this.setState({ value: e.target.value });

  }

 
  render() {
    console.log(this.state); 
    console.log(` Chances left: ${this.state.chances}`);
    console.log(this.state.magicNumber);

    if( this.state.chances <= 0 ){
      console.log("We have to reload the page!");
      this.refreshPage();
    } else {
      console.log(`input : ${this.state.value}`);
    }
  
    if( this.state.num == this.state.value ){
      console.log(" Congraaatss!!!!! <3 ");
      this.refreshPage();
    }

    return (
      <div className="App">

        <h1 className='App-number'> {this.state.num}  </h1>
       <p> Guess the <i>Magic Number</i> </p>
       <input className='App-input' type='number' min={0} max={9} value={this.state.value} onChange={this.handleChange} />
        <div>
           <button onClick={this.guess} className='App-button' > Guess</button>
           <p> Chances Left: {this.state.chances} </p>
           <p className='App-results'>
              { this.state.num == this.state.value ?  <p>YOU WON!!! </p>  : <p>  </p>}
           </p>
        </div>
        
      </div>
    );
  }
}
export default App;