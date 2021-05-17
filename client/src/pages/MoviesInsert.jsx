import React, { Component } from 'react'
import api from '../api'

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeMovie = async () => {
        const { name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    render() {
        const { name, rating, time } = this.state
        return (
            <div className="form-group">
                <h1 className="h1">Create Movie</h1>

                <label>Name: </label>
                <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <label>Rating: </label>
                <input
                    className="form-control"
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <label>Time: </label>
                <input
                    className="form-control"
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <button className="btn btn-primary" onClick={this.handleIncludeMovie}>Add Movie</button>
                <a className="btn btn-danger" href={'/movies/list'}>Cancel</a>
            </div>
        )
    }
}

export default MoviesInsert