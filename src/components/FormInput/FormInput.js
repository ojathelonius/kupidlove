import React from 'react';
import { Input, Item, Label} from 'native-base';

class FormInput extends React.Component {

    /**
     * This class can be included in a Redux Form <Field /> component.
     * TODO : make a wrapper library for native-base & redux-form, for various input components ?
     */

    render() {
        return (
            <Item {...this.props.itemProps}>
                <Label>{...this.props.label}</Label>
                <Input {...this.props.inputProps} />
            </Item>
        );
    }
}

export default FormInput;