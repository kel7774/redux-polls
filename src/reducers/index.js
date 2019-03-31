import { combinedReducers } from 'redux'
import authedUser from './authedUser'
import users from './user'
import polls from './polls'
import { loadingBarReducer } from 'react-redux-loading'

export default combinedReducers({
    authedUser,
    users,
    polls,
    loadingBar: loadingBarReducer,
})