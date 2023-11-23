import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
   
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenidos al curso de Coder</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ADAC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
    fontSize: 25
  }


  
});
