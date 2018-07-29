import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import filteredRobots from '../selectors/filteredRobots';

class CardList extends React.Component{
  render(){
    const {robots} = this.props;
    return(
      <div>
        <div>
        {
          robots.map(robot=> <Card key={robot.id} {...robot} />)
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  robots: filteredRobots(state.fetchRobots.robots, state.fetchFilters)
})

export default connect(mapStateToProps)(CardList);