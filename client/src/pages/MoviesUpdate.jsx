import React, { Component } from 'react'
import api from '../api'


class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdateMovie = async () => {
        const { id, name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            rating: movie.data.data.rating,
            time: movie.data.data.time.join('/'),
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

                <button className="btn btn-primary" onClick={this.handleUpdateMovie}>Update Movie</button>
                <a className="btn btn-danger" href={'/movies/list'}>Cancel</a>
            </div>
        )
    }
}

export default MoviesUpdate