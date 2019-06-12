import React, { Component } from 'react';
import { connect } from 'react-redux';

import {inputAction} from './../actions/operationActions';

import Button from '@material-ui/core/Button';

class CalculatorFrame extends Component {
  render() {
    const {value, inputAction} = this.props;

   return (
    <div>
        <p>
            {value}
        </p>
        <Button variant={"contained"} color={"default"} onClick={inputAction.bind(this, "hello")}>click me</Button>
    </div>
   );
  }
 }

 const mapStateToProps = state => ({
    value: state.operationReducer.value
   })
const mapDispatchToProps = dispatch => ({
    inputAction: (val) => dispatch(inputAction(val))
    })
      

 export default connect(mapStateToProps, mapDispatchToProps)(CalculatorFrame);
