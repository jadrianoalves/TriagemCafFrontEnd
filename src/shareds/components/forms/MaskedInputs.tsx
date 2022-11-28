import React from 'react';
import InputMask from 'react-input-mask';
 
export class CPFInput extends React.Component {
  render() {
    return <InputMask 
            {...this.props} 
            mask="999.999.999-99" 
            maskChar="_" />;
  }
}
