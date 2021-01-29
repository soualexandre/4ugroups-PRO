import React from 'react';
import { StyleSheet, 
  Text,
   View, 
   KeyboardAvoidingView
   ,Image,
    TextInput,
    TouchableOpacity
  
  } from 'react-native';

export default function Register({navigation}) {
  return (
   <KeyboardAvoidingView style={styles.backgroundColor}>
     <View style={styles.containeLogo}>
       <Image 
       source={require('../../assets/logo.png')}
       />
     </View>
     <View style={styles.container}>
    
       <Text style={styles.helpText}>Insira seus dados para criarmos seu acesso.</Text>
       <TextInput
       style={styles.input}
       placeholder="Alexandre"
       autoCorrect={false}
       onChangeText={()=>{}}
       />
       <TextInput
       style={styles.input}
       placeholder="Souza dos Santos"
       autoCorrect={false}
       onChangeText={()=>{}}
       />
        <TextInput
       style={styles.input}
       placeholder="alexandre@4ugroups.com"
       autoCorrect={false}
       onChangeText={()=>{}}
       />
       <TextInput
       style={styles.input}
       secureTextEntry={true}
       placeholder="********"
       type='password'
       autoCorrect={false}
       onChangeText={()=>{}}
       />

       <TouchableOpacity style={styles.btnSubmit}>
         <Text style={styles.submitText}>Confirmar</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.btnLogin}
        onPress={() => navigation.navigate('Login')}
       >
         <Text style={styles.textLogin}>Tenho uma conta</Text>
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
    backgroundColor: '#538BF0'
  },
  containeLogo:{
    justifyContent: 'center',
    marginTop: 75,
    marginBottom: 10,
  },
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  helpText:{
    marginBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18
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
  btnLogin:{
    marginTop: 20,
    marginBottom: -40,
  },
  btnSubmit:{
    backgroundColor:'#2F2E41',
    width: '90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#fff',
    fontSize: 14
  },
  textLogin:{
    color: '#fff',
    fontSize: 14,
    marginTop: -10,
  },
});
