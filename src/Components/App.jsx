import React, { Component } from 'react'
import Table from './Table'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Uzupełnij posiadane surowce</p>
        <Table />
      </div>
    )
  }}
