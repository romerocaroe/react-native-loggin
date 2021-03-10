import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const LoggerForm = (props) => {
    const [value, onChangeText] = React.useState(props.labelProp);
    const [errorState, onChangeError] = React.useState(false);
    const onMistake = () => onChangeError(true);
    const onNoMistake = () => onChangeError(false);

    return (
        <TextInput
            error={errorState}
            style={styles.container}
            label={props.labelProp}
            value={value}
            onChangeText={value => onChangeText(value)}
            onChangeError={props.labelProp == 'Email' && value.includes('@') ? onMistake : onNoMistake}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:5,
        backgroundColor: "#ECF0F1",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default LoggerForm;