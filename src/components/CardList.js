import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { setFilterText } from '../actions/filters';
import filteredRobots from '../selectors/filteredRobots';

class CardList extends React.Component{
  render(){
    const {robots, filterText, dispatch} = this.props;
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
  robots: filteredRobots(state.fetchRobots.robots, state.fetchFilters),
  filterText: state.fetchFilters.filterText
})

export default connect(mapStateToProps)(CardList);