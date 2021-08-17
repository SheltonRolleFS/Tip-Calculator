import { useState } from 'react'

// SASS IMPORT
import './sass/main.scss'

function App() {
  const [tipPerc, setTipPerc] = useState(0)

  const setCustomTip = () => {
    const entry = document.querySelector('#custom-tip').value
    const amount = entry / 100
    setTipPerc(amount)
  }

  const getAmount = () => {
    // Get all the data the user entered
    let billStr = document.querySelector('#bill-amount').value
    let numPeopleStr = document.querySelector('#num-people__input').value
    const tipPerPersonEle = document.querySelector('#tip-per-person')
    const totalPerPersonEle = document.querySelector('#total-per-person')

    const bill = parseInt(billStr)
    const numPeople = parseInt(numPeopleStr)

    // Use the gathered data to calculate all the results
    const tip = bill * tipPerc
    const total = bill + tip
    const tipPerPerson = tip / numPeople
    const totalPerPerson = total / numPeople

    // Populate the elements with the results
    tipPerPersonEle.innerHTML = `$${Number.parseFloat(tipPerPerson).toFixed(2)}`
    totalPerPersonEle.innerHTML = `$${Number.parseFloat(totalPerPerson).toFixed(2)}`
  }

  const reset = () => {
    // Reset the tip percentage
    setTipPerc(0)

    // Reset the Inputs
    document.querySelector('#bill-amount').value = 0
    document.querySelector('#num-people__input').value = 0

    // Reset the results
    document.querySelector('#tip-per-person').innerHTML = ''
    document.querySelector('#total-per-person').innerHTML = ''
  }

  return (
    <>
      <div className="calculator">
        <div className="user-entry">
          <div className="bill">
            <label htmlFor="bill-amount">Bill</label>
            <input type="number" id="bill-amount" placeholder="eg. 145" />
          </div>

          <div className="tip-perc">
            <h2>Select Tip %</h2>
            <ul>
              <li><button onClick={() => setTipPerc(.05)}>5%</button></li>
              <li><button onClick={() => setTipPerc(.1)}>10%</button></li>
              <li><button onClick={() => setTipPerc(.15)}>15%</button></li>
              <li><button onClick={() => setTipPerc(.25)}>25%</button></li>
              <li><button onClick={() => setTipPerc(.5)}>50%</button></li>
              <li><button onClick={() => setTipPerc('custom')}>Custom</button></li>
            </ul>

            {tipPerc === 'custom' ? 
              <div className="custom">
                <input type="number" id="custom-tip" placeholder="Enter amount" />
                <div>
                  <p>Note: Please enter the percent you want to tip not the amount.</p>
                  <button onClick={() => setCustomTip()}>Save</button>
                </div>
              </div>
              :
              ''  
            }
          </div>

          <div className="num-people">
            <label htmlFor="num-people__input">Number of People</label>
            <input type="number" id="num-people__input" placeholder="eg. 3" />
          </div>

          <div className="get-amount">
            <button onClick={() => getAmount()}>Get Amount</button>
          </div>
        </div>

        <div className="results">
          <div className="tip-amount">
            <div className="label">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <p className="amount-result" id="tip-per-person"></p>
          </div>

          <div className="total">
            <div className="label">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <p className="amount-result" id="total-per-person"></p>
          </div>

          <button onClick={() => reset()} id="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
