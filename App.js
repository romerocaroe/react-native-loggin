import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Main from './components/Main';
import Nav from './components/Nav';

// or any pure javascript modules available in npm
import { Provider as PaperProvider } from 'react-native-paper';
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <Nav></Nav>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text color="#5989B3" style={styles.paragraph}>
            WELCOME
          </Text>
          <Main />
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card:{
    shadowOpacity:0,
    margin: 10,
  },
  paragraph: {
    color:"#5989B3",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});