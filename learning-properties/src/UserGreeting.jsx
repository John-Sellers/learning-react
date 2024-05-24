import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeGreeting = <h2 className="welcome-greeting">Welcome {props.userName}</h2>

    const loginMessage = <h2 className="login-message">Please Log In To Continue</h2>

    return (props.isLoggedIn ? welcomeGreeting : loginMessage)
}

UserGreeting.propTypes = {
    userName: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    userName: "Guest",
    isLoggedIn: false
}

export default UserGreeting