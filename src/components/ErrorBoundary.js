import React, { Component } from 'react';

export default class ErrorBoundary extends Component{
  state = {
    hasError: false,
  }

  componentDidCatch(error, info){
    this.setState({hasError: true});
    // logErrorToMyService(error, info);
  }
  render(){
    if(this.state.hasError){
      return <p>Errors Catched. </p>
    }
    return this.props.children;
  }
}