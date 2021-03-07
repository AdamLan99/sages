import React, { Component } from 'react'

export default class Table extends Component {

    state = {
        food: 0,
        gold: 0,
        wood: 0,
        stone: 0
    }

    componentDidMount() {
        this.fetchUnits()
    }

    handleInputs(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    calculateUnits() {

    }

    async fetchUnits() {
        await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/units', {})
            .then(x => x.json()).then(x => console.log(x))
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3">
                            <input
                                name="food"
                                type="number"
                                className="input input-group rounded"
                                placeholder="Pozywienie"
                                onChange={e => this.handleInputs(e)}
                                value={this.state.food} />
                        </div>
                        <div className="col-lg-3">
                            <input
                                name="gold"
                                type="number"
                                className="input input-group rounded"
                                placeholder="Złoto"
                                onChange={e => this.handleInputs(e)}
                                value={this.state.gold} />
                        </div>
                        <div className="col-lg-3">
                            <input
                                name="wood"
                                type="number"
                                className="input input-group rounded"
                                placeholder="Drewno"
                                onChange={e => this.handleInputs(e)}
                                value={this.state.wood} />
                        </div>
                        <div className="col-lg-3">
                            <input
                                name="stone"
                                type="number"
                                className="input input-group rounded"
                                placeholder="Kamień"
                                onChange={e => this.handleInputs(e)}
                                value={this.state.stone} />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-12">
                            <button className="btn input-group" style={{ justifyContent: "center" }}>
                                Calculate units
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        )
    }
}
