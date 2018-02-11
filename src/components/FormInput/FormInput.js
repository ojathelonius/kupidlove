import React from 'react';
import { Input, Item, Label, View } from 'native-base';
import style from './FormInputStyle';

class FormInput extends React.Component {

    /**
     * This class can be included in a Redux Form <Field /> component.
     * TODO : make a wrapper library for native-base & redux-form, for various input components ?
     */

    render() {
        // It seems necessary to add a marginLeft and marginTop of 15 as these properties are lost when passing this component in a Field component
        
        return (
            <View>
                <Item {...this.props.itemProps} style={style.itemStyle}>
                    <Label>{this.props.label}</Label>
                    <Input {...this.props.inputProps} onChangeText={this.props.onChange} name={this.props.name} {...this.props.input} />
                </Item>
            </View>
        );
    }
}

export default FormInput;