import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalBody } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { LoginActions } from '../redux/refdata/login/actions'

const PageTask = ['login', 'authenticating']
    .reduce((obj, task, idx) => ({ ...obj, [task]: idx}), {})


class loginPage extends React.Component {
    state = { task: PageTask.login }
    onLoginClicked = () => {
        console.log(this.props)
        this.setState({ task: PageTask.authenticating })
        setTimeout(() => this.props.dispatch(LoginActions.login({ user:'me' })), 1500)
    }

    renderLoggedIn = ({location}) =>
        location.state && location.state.from.pathname !== location.path
            ? <Redirect to={location.state.from}/>
            : <div>authenticated</div> // avoid loop

    renderLoggedOut = () => ({
        [PageTask.login]: <Button onClick={this.onLoginClicked} color="primary">Login</Button>,
        //[PageTask.authenticating]: <div>...authenticating...</div>
        [PageTask.authenticating]: <Modal isOpen centered fade={false}><ModalBody>Authenticating...</ModalBody></Modal>
    })[this.state.task]

    render = () =>
        this.props.login.isLoggedIn
            ? this.renderLoggedIn(this.props)
            : this.renderLoggedOut()
}

const mapStateToProps = (reduxstate) => ({
    login: reduxstate.login
})

export const LoginPage = connect(mapStateToProps)(loginPage)