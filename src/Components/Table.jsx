import React, { Component } from 'react'

export default class Table extends Component {

    state = {}

    componentDidMount() {
        this.fetchUnits()
    }

    async fetchUnits() {
        await fetch('',{})
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3">
                            <input name="food" type="text" className="input input-group"/>
                        </div>
                        <div className="col-lg-3">
                            <input name="gold" type="text" className="input input-group"/>
                        </div>
                        <div className="col-lg-3">
                            <input name="wood" type="text" className="input input-group"/>
                        </div>
                        <div className="col-lg-3">
                            <input name="stone" type="text" className="input input-group"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        )
    }
}
