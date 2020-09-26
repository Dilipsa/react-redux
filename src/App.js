import React, { Component } from 'react'

import update_person from './store/actions/personActions';
import update_game from './store/actions/gameActions';
import fetch_user from './store/actions/userActions';
import fetch_juser from './store/actions/juserActions';
import update_car from './store/actions/carActions';

import { connect } from 'react-redux';



class App extends Component {

    render() {console.log(this.props)
        return (
            <>
                <h3>Redux Tutorial</h3>
                person name: {this.props.person.name}
                <button onClick={this.props.updatePerson}>update person</button>
                <br />
                game name: {this.props.game.name}
                <button onClick={this.props.updateGame}>update game</button><br />
                Users : <button onClick={this.props.fetchUsers}>fetch User</button>
                {
                    this.props.users.length === 0 ? <p> no user found</p> :
                    this.props.users.map(user => <p key={user.id}>{user.id} - {user.first_name} - {user.email}</p>)
                }
                <h4>
                    {/* car Name : {this.props.cars.name}
                    <button onClick={this.props.fetchCars}>fetch Car</button><br /> */}
                    {/* Json user name: {this.props.jusers.name} */}
                    Users : <button onClick={this.props.fetchJusers}>fetch Json User</button>
                </h4>
                {
                    this.props.jusers.length === 0 ? <p> no user found</p> :
                    this.props.jusers.map(user => <p key={user.id}>{user.id} - {user.name} - {user.email}</p>)
                }
                car name: {this.props.cars.name}
                <button onClick={this.props.updateCars}>update car</button><br />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        person: state.person,
        users: state.users,
        jusers: state.jusers,
        cars: state.cars,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateGame: () => {dispatch(update_game)},
        updatePerson: () => {dispatch(update_person)},
        fetchUsers: () => {dispatch(fetch_user)},
        fetchJusers: () => {dispatch(fetch_juser)},
        updateCars: () => {dispatch(update_car)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);