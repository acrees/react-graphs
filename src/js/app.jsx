import React from 'react'
import { connect } from 'react-redux'
import Chart from './chart.jsx'
import { update } from './actions'

function mapStateToProps(state) {
  return { f: state.f };
}

function mapDispatchToProps(dispatch) {
  return { update: e => dispatch(update(e.target.value)) };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.update} value={this.props.f} />
        <br />
        <br />
        <Chart f={this.props.f} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
