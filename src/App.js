import React, { Component } from 'react';
import './App.css';

const defaultState = {
  currentInput: {
    mealPrice: 0,
    taxRate: 0,
    tipPercentage: 0
  },
  customerCharges: {
    subTotal: 0,
    tip: 0,
    total: 0
  },
  myEarnings: {
    tipTotal: 0,
    mealCount: 0,
    averageTipPerMeal: 0
  }
};

export default class App extends Component {
  state = { ...defaultState };

  handleSubmit = (ev) => {
    ev.preventDefault();
    let { baseMeal, taxRate, tipPercentage } = ev.target;
    let baseMealValue = parseInt(baseMeal.value);
    let taxRateValue = parseInt(taxRate.value);
    let tipPercentageValue = parseInt(tipPercentage.value);
    let { subTotal, tip, total } = this.calculateCustomerCharges(
      baseMealValue,
      taxRateValue,
      tipPercentageValue
    );
    this.setState((state) => ({
      currentInput: {
        mealPrice: baseMealValue,
        taxRate: taxRateValue,
        tipPercentage: tipPercentageValue
      },
      customerCharges: {
        subTotal,
        tip,
        total
      },
      myEarnings: {
        tipTotal: +(state.myEarnings.tipTotal + tip).toFixed(2),
        mealCount: state.myEarnings.mealCount + 1,
        averageTipPerMeal: +(
          (state.myEarnings.tipTotal + tip) /
          (state.myEarnings.mealCount + 1)
        ).toFixed(2)
      }
    }));
    // baseMeal.value = '';
    // taxRate.value = '';
    // tipPercentage.value = '';
  };

  calculateCustomerCharges(baseMeal, taxRate, tipPercentage) {
    let subTotal = baseMeal * (taxRate / 100 + 1);
    let tip = subTotal * (tipPercentage / 100);
    let total = subTotal + tip;
    subTotal = +subTotal.toFixed(2);
    tip = +tip.toFixed(2);
    total = +total.toFixed(2);
    return { subTotal, tip, total };
  }

  handleResetClick = () => {
    this.setState({ ...defaultState });
  };

  render() {
    let { customerCharges, myEarnings } = this.state;
    return (
      <div className="App">
        <header className="App__Header">
          <h1>Waitstaff Calculator</h1>
        </header>
        <main>
          <div className="boxesContainer">
            <div className="mealDetails">
              <h2>Enter the meal details</h2>
              <form onSubmit={this.handleSubmit}>
                <input
                  name="baseMeal"
                  placeholder="Base Meal Price"
                  type="number"
                  required
                />
                <input
                  name="taxRate"
                  placeholder="Tax Rate"
                  type="number"
                  required
                />
                <input
                  name="tipPercentage"
                  placeholder="Tip Percentage"
                  type="number"
                  required
                />
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
              </form>
            </div>
            <div className="rightContainer">
              <div className="customerCharges">
                <h2>Customer Charges</h2>
                <h3>Subtotal : {customerCharges.subTotal}</h3>
                <h3>Tip : {customerCharges.tip}</h3>
                <h3>Total : {customerCharges.total}</h3>
              </div>
              <div className="earnings">
                <h2>My Earnings</h2>
                <h3>Tip Total : {myEarnings.tipTotal}</h3>
                <h3>Meal Count : {myEarnings.mealCount}</h3>
                <h3>Average Tip Per Meal : {myEarnings.averageTipPerMeal}</h3>
              </div>
            </div>
          </div>
          <div className="resetButton">
            <button onClick={this.handleResetClick}>Reset</button>
          </div>
        </main>
      </div>
    );
  }
}
