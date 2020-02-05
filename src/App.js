import React, { Component } from 'react';
import './App.css';

export default class App extends React.Component {
  // this.state = {
  //   tipTotal: 0,
  //   mealCount: 0,
  //   averageTipPerMeal: 0
  // };

  render() {
    return (
      <div className="App">
        <header className="App__Header">
          <h1>Waitstaff Calculator</h1>
        </header>
        <main>
          <div className="boxesContainer">
            <div className="mealDetails">
              <h2>Enter the meal details</h2>
              <form>
                <input placeholder="Base Meal Price" />
                <input placeholder="Tax Rate" />
                <input placeholder="Tip Percentage" />
                <button>Submit</button>
                <button>Cancel</button>
              </form>
            </div>
            <div className="rightContainer">
              <div className="customerCharges">
                <h2>Customer Charges</h2>
                <h3>Subtotal : xxx</h3>
                <h3>Tip : xxx</h3>
                <h3>Total : xxx</h3>
              </div>
              <div className="earnings">
                <h2>My Earnings</h2>
                <h3>Tip Total : xxx</h3>
                <h3>Meal Count : xxx</h3>
                <h3>Average Tip Per Meal : xxx</h3>
              </div>
            </div>
          </div>
          <div className="resetButton">
            <button>Reset</button>
          </div>
        </main>
      </div>
    );
  }
}
