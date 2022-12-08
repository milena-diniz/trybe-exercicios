import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super();
    
    this.state = {
      algumaCoisa:0,
    }
  }
  
  buttonClick = () => {
    this.setState({ 
      algumaCoisa: this.state.algumaCoisa + 1 
    }); 
    console.log(`Botão ${this.getButton(this.state.algumaCoisa)}`);
  }
  
  getButton(num) {
    return num % 2 === 0 ? 'green' : 'red';
  }
  
  
  render () {
    return (
      /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
      <>
        <button 
        onClick={ this.buttonClick }
        style={ {backgroundColor: this.getButton(this.buttonClick)}}
        >
          {this.state.algumaCoisa}
        
        </button>
      </>
    )
  }
}

export default App;
