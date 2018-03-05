import React from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, View, Item } from 'native-base';
import style from './FormRadioButton';

class FormRadioButton extends React.Component {

    /**
     * This class can be included in a Redux Form <Field /> component.
     */

    render() {

        return (

            <Container style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ paddingRight: 10 }}>{this.props.label}</Text>
                <Radio selected={false} />
            </Container>

        );
    }
}

export default FormRadioButton;