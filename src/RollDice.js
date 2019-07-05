import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one', die2: 'one', rolling: false
    };
    this.roll = this.roll.bind(this);
  }

  roll(){
    const newDie1 = this.props.sides[Math.floor( Math.random() * 6 )];
    const newDie2 = this.props.sides[Math.floor( Math.random() * 6 )];

    this.setState({die1: newDie1, die2: newDie2, rolling: true});

    //wait one second then set rolling to false
    setTimeout(() => {
      this.setState({rolling: false});
    }, 1000);
  } 

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDIce-container'>
          {/* Here we pass in stateful properties from the parent component (the component we are in RollDice.js) and pass it down into Die.js component. In our Die.js component we pass in face as a prop*/}
          <Die face={this.state.die1} rolling={this.state.rolling} /> 
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;