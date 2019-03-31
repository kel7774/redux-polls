import { combinedReducers } from 'redux'
import authedUser from './authedUser'
import users from './user'
import polls from './polls'

export default combinedReducers({
    authedUser,
    users,
    polls,
})