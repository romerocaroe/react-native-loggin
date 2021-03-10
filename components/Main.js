import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from "react";
import LoggerForm from './LoggerForm';
import { Card, Snackbar, Button } from 'react-native-paper';

const Main = () => {
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const labelEmail = 'Email';
    const labelPass = 'Password';
    
    return (
        <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'X',
                onPress: () => {
                    // Do something
                },
                }}>
                Logeado correctamente!
            </Snackbar>
            <Card style={styles.form}>
                <LoggerForm labelProp={labelEmail}/>
                <LoggerForm labelProp={labelPass}/>
            </Card>
        
            <Button style={styles.button} color="#5989B3" mode="contained" title="Iniciar Sesión" onPress={onToggleSnackBar} color="#5989B3">Iniciar Sesión</Button>
            
            <Button style={styles.paragraph} mode="contained" color="#5989B3" onPress={()=> {}}>
                Create an account
            </Button>
            <Button style={styles.paragraph} mode="text" color="#5989B3" onPress={()=> {}}>
                Forgotten password?
            </Button>

            <Text color="#5989B3" style={styles.paragraph}>
            </Text>
            <Text color="#5989B3" style={styles.paragraph}>
            </Text>
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:5,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    snackbar: {
        flex: 1,
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
        margin:0,
        padding: 0,
        shadowOpacity:0
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingLeft:20,
        paddingRight: 20
    },
    paragraph: {
        color:"#5989B3",
        margin: 0,
        fontSize: 0,
        textAlign: 'center',
    },
});
    
    export default Main;