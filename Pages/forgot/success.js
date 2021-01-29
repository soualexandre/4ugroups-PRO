import React from 'react';
import { StyleSheet, 
  Text,
   View, 
   KeyboardAvoidingView
   ,Image,
    TouchableOpacity
  
  } from 'react-native';

export default function Success({navigation}) {
  return (
   <KeyboardAvoidingView style={styles.backgroundColor}>
     <View style={styles.containeLogo}>
       <Image 
       source={require('../../assets/succes.png')}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.TextRec}>Pronto!</Text>
       <Text style={styles.TextInfo}>Precisamos que você insira seu e-mail para enviar um link com instruções para alteração da sua senha..</Text>

     
       <TouchableOpacity
        style={styles.btnSubmit} 
        onPress={() => navigation.navigate('Login')}
       >
         <Text style={styles.submitText}>Ok, obrigado!</Text>
       </TouchableOpacity>
     </View>
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundColor:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F2E41'
  },
  containeLogo:{
    justifyContent: 'center',
  },
   container:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  TextRec:{
    width: '90%',
    marginTop: 40,
    color: '#fff',
    fontSize: 35,
  },
  TextInfo:{
    width: '90%',
    marginBottom:20,
    color: '#fff',
    fontSize: 15,
  },
  input:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 14,
    borderRadius: 7,
    padding:10,
    
  },
  btnSubmit:{
    backgroundColor:'#538BF0',
    width: '90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 140,
  },
  submitText:{
      color:'#fff'
  }
});
