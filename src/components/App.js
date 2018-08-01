import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import { requestRobots } from '../actions/robots';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component{
  componentDidMount(){
    this.props.onRequestRobots();
  }
  render(){
    if(this.props.pending){
      return <p>Loading</p>
    }
    return(
      <div>
        <div className="tc">
          <h1>Robotify</h1>
          <SearchBox/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.props.robots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  robots: state.fetchRobots.robots,
  error: state.fetchRobots.error,
  pending: state.fetchRobots.pending
})

const mapDispatchToProps = (dispatch) =>({
  onRequestRobots: () => dispatch(requestRobots()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
