import React from 'react';
import { connect } from 'react-redux';
import robots from '../robots';
import { setFilterText } from '../actions/filters';

const SearchBox = (props) =>(
  <div>
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder='filter robots'
        onChange={(e)=>{
          const filterText = e.target.value;
          props.dispatch(setFilterText(filterText))}
        }
        />
    </div>
  </div>
)

export default connect()(SearchBox);
