import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import ButtonGrid from './ButtonGrid';


class CalculatorFrame extends Component {
  render() {
    const {value} = this.props;

   return (
    <div>
        <TextField
            id="outlined-bare"
            value={value}
            margin="normal"
            variant="outlined"
            style={{width: 300}}
            inputProps={{
                style: { textAlign: "right" }
              }}
        />

        <ButtonGrid />

    </div>
   );
  }
 }

 const mapStateToProps = state => ({
    value: state.operationReducer.value
   })
const mapDispatchToProps = dispatch => ({

})
      

 export default connect(mapStateToProps, mapDispatchToProps)(CalculatorFrame);
