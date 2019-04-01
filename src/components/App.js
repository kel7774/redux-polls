import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null
         : <Poll/>}
      </div>
    )
  }
}

function mapStateToProps( { authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)