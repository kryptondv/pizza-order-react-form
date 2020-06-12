import React from 'react';

import GlutenFreeSelector from './GlutenFreeSelector';
import Header from './Header';
import SizeSelector from './SizeSelector';
import SpecialInstructionsField from './SpecialInstructionsField';
import ToppingSelector from './ToppingSelector';
import Total from './Total';

import './styles/form.css'
import SubmitButton from './SubmitButton';
import SummaryDisplay from './SummaryDisplay';

class Form extends React.Component {
  state = {
    pizza: {
      size: 'small',
      topping: '',
      glutenFree: false,
      specialInstructions: '',
    },
    price: {
      base: {
        small: 20,
        medium: 40,
        large: 60
      },
      toppings: {
        pepperoni: {
          small: 5,
          medium: 10,
          large: 15
        },
        spinache: {
          small: 2,
          medium: 5,
          large: 10
        },
        tuna: {
          small: 3,
          medium: 6,
          large: 9
        },
      }
    },
    total: 20,
    orderConfirmed: false,

  };

  onInputChange = async (name, value) => {
    if(!this.state.orderConfirmed){
      await this.setState({
        pizza: {
          ...this.state.pizza,
          [name]: value
        },
      });
      if(name === 'size' || name==='topping') {
        this.calculateTotal()
      }
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.setState({orderConfirmed: true})
  }

  calculateTotal() {
    

    let total = this.state.price.base[this.state.pizza.size]
    if (this.state.pizza.topping) {
      const toppingPrice = this.state.price.toppings[this.state.pizza.topping][
        this.state.pizza.size
      ];
      total += toppingPrice
    }
    
    this.setState({total})
    
    
  }

  render() {
    return (
      <div className="order-form-container">
      <form className="order-form">
          <Header />
          <SizeSelector
            currentSize={this.state.pizza.size}
            onInputChange={this.onInputChange}
            price={this.state.price.base}
          />
          <ToppingSelector
            currentSize={this.state.pizza.size}
            topping={this.state.pizza.topping}
            onInputChange={this.onInputChange}
            price={this.state.price.toppings}
          />
          <GlutenFreeSelector
            glutenFree={this.state.pizza.glutenFree}
            onInputChange={this.onInputChange}
          />
          <SpecialInstructionsField
            instructions={this.state.pizza.specialInstructions}
            onInputChange={this.onInputChange}
            onInstructionChange={this.onInstructionChange}
          />
          <SummaryDisplay
            pizza={this.state.pizza}
            orderConfirmed={this.state.orderConfirmed}
          />
          <div className="checkout">
            <Total total={this.state.total} />
            <SubmitButton
              onFormSubmit={this.onFormSubmit}
              orderConfirmed={this.state.orderConfirmed}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;