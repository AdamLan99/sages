import React, { Component } from 'react'
import Table from './Table'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <p className="p-2" style={{fontSize: 20}}>Uzupełnij posiadane surowce</p>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <Table />
      </div>
    )
  }
}
