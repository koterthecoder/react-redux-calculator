import React, { Component } from 'react';
import { connect } from 'react-redux';
import {inputAction, evaluateAction, clearAction} from './../actions/operationActions';
import Button from '@material-ui/core/Button';

class ButtonGrid extends Component {
  render() {
    const {inputAction, evaluateAction, clearAction} = this.props;

    const buttons = [
        { value: "7", style: "default" }, { value: "8", style: "default" }, { value: "9", style: "default" }, { value: "+", style: "primary" },
        { value: "4", style: "default" }, { value: "5", style: "default" }, { value: "6", style: "default" }, { value: "-", style: "primary" },
        { value: "1", style: "default" }, { value: "2", style: "default" }, { value: "3", style: "default" }, { value: "*", style: "primary" },
        { value: "C", style: "secondary" }, { value: "0", style: "default" }, { value: ".", style: "default" }, { value: "/", style: "primary" },
    ];


   return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', width: 300, marginLeft: 'auto', marginRight: 'auto'}}>
                {buttons.map( (button, key) => 
                    {
                        if (button.value === "C") {
                            return(<Button variant="contained" key={key} onClick={clearAction.bind(this)} 
                                        color={button.style} style={{width: 75}} > {button.value} </Button>);
                        } 
                        else {
                            return (<Button variant="contained" key={key} onClick={inputAction.bind(this, button.value)} 
                                        color={button.style} style={{width: 75}} > {button.value} </Button>);
                        }
                    }
                )}
            </div>
            <Button onClick={evaluateAction.bind(this)} variant="contained" style={{width: 300}} color="primary" > = </Button>
       </div>
   );
  }
 }

 const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    inputAction: (val) => dispatch(inputAction(val)),
    clearAction: () => dispatch(clearAction()),
    evaluateAction: () => dispatch(evaluateAction())
    })
      

 export default connect(mapStateToProps, mapDispatchToProps)(ButtonGrid);
