import { StatusBar } from 'expo-status-bar'; // gestão de versões android e IOS
import {useState} from 'react'; // Elementos FrontEnd
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText]= useState('Bem vindo teste');

  return (
    <View style={styles.container}>
      <Text>Teste hello World</Text>
      <TextInput style={styles.input}
      onChangeText={(value)=>console.log(value)}
      ></TextInput> 

      <TextInput style={styles.input}
      onChangeText={setText}
      ></TextInput> 

      <TextInput style={styles.input}
      onChangeText={setText}
      ></TextInput> 

      <StatusBar style="auto" />
      <Text> Digitando . . .</Text>
    </View>
  );
}


//------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height:50,
    width:190,
    borderBottomWidth:4
  }
});
