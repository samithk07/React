import "./User.css"
import PropTypes from 'prop-types'
function UserGreeting(props){

    let Welcomemessage=<h2 className="Welcome-message">
                       Welcome{props.username}
                       </h2>
let LoginOpen=<h2 className="login-open">Log in to open</h2>

return(props.isLoggedIn ? Welcomemessage:LoginOpen)
                        
}
UserGreeting.proptypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}


export default UserGreeting