import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
    render(){
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps({ authedUser, polls, users }, { match }){
    const { id } = match.params
    const poll = polls[id];

    if(!poll){
        return {
            poll:null
        }
    }

}

export default connect(mapStateToProps)(Poll)