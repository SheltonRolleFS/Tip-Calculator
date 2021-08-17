function App() {
  return (
    <div className="App">
      <div class="calculator">
        <h1>Bill</h1>

        <h2>Select Tip %</h2>
        <ul>
          <li>5%</li>
          <li>10%</li>
          <li>15%</li>
          <li>25%</li>
          <li>50%</li>
          <li>Custom</li>
        </ul>

        <div id="num-people">
          <label for="num-people__input">Number of People</label>
          <input type="text" id="num-people__input" placeholder="eg. 3" />
        </div>

        <div class="tip-amount">
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>

        <div class="total">
          <h3>Total</h3>
          <p>/ person</p>
        </div>

        <button id="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
