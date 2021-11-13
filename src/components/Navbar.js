import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="container my-2" style={{ marginLeft: "20%" }}>
          <h1>ROI Calculator</h1>

          <div className="form-switch" style={{ marginLeft: "42%" }}>
            <label className="mx-5">CAKE</label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label" for="flexSwitchCheckChecked">
              USD
            </label>
          </div>
          <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft:"50%", paddingTop:"6px", backgroundColor:"White", color:"Black"}}>
            0.000 USD
          </button>
          <br/>
          <button type="button" className="btn btn-secondary my-2 mx-2">$1000</button>
          <button type="button" className="btn btn-secondary my-2 mx-2">$100</button>
          <br/>
          <h3 style={{marginTop:'20px'}}>Timeframe</h3>
          <button type="button" className="btn btn-secondary mx-2">1 Day</button>
          <button type="button" className="btn btn-secondary mx-2">7 Days</button>
          <button type="button" className="btn btn-secondary mx-2">30 Days</button>
          <button type="button" className="btn btn-secondary mx-2">1 Year</button>
          <button type="button" className="btn btn-secondary mx-2">5 Year</button>
          <br/>
          <h3 style={{marginTop:'20px'}}>Enable Accelerated APY</h3>
          <button type="button" className="btn btn-secondary mx-2">Tier 1</button>
          <button type="button" className="btn btn-secondary mx-2">Tier 2</button>
          <button type="button" className="btn btn-secondary mx-2">Tier 3</button>
          <button type="button" className="btn btn-secondary mx-2">Tier 4</button>
          <button type="button" className="btn btn-secondary mx-2">Tier 5</button>
          <br/>
          <p style={{ marginLeft: "47%" }}>ROI at Current Rates</p>
          <br/>
          <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft:"50%", paddingTop:"6px", backgroundColor:"White", color:"Black"}}>
            0.00 USD
          </button>
          <br/>
          <p style={{ marginLeft: "41%" }}>~0.000 CAKE + 0.000000 DON</p>
          <br/>
          <p style={{ marginLeft: "25%" }}>Hide Details ^</p>
          <br/>
          <p>APY</p>
          <p style={{ marginLeft: "56%" }}>9.0%</p>
          <br/>
          <ul>
            <li>Calculated Based on Current rates.</li>
            <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
