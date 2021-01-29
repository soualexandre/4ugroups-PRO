import React from 'react';
import { StyleSheet, 
  Text,
   View, 
   KeyboardAvoidingView
   ,Image,
    TouchableOpacity
  
  } from 'react-native';
  import {TextInput } from 'react-native-paper'



export default function Login({navigation}) {


  return (
   <KeyboardAvoidingView style={styles.backgroundColor}>
     <View style={styles.containeLogo}>
       <Image 
       source={require('../../assets/logo.png')}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.helpText}>Bem vindo! Insira seu e-mail e senha para validarmos seu acesso.</Text>
       <TextInput
       style={styles.input}
       label='Email'
       placeholder='groups@4ugroups.com'
       autoCorrect={false}
       onChangeText={()=>{}}
       />
       <TextInput
       style={styles.input}
       secureTextEntry={true}
       label='Senha'
       placeholder='********'
       type='password'
       autoCorrect={false}
       onChangeText={()=>{}}
       />

       <TouchableOpacity
        style={styles.btnSubmit} 
       onPress={() => navigation.navigate('TabButton')}

       >
         <Text style={styles.submitText}>Entrar</Text>
       </TouchableOpacity>
     </View>
    <View style={styles.containerOptions}>
     <TouchableOpacity style={styles.btnGoogle}>
         <Text style={styles.textGoogle}>Entrar com o GOOGLE +</Text>
       </TouchableOpacity>
    
     <View style={{flexDirection: 'row'}}>
       <TouchableOpacity 
       style={styles.btnRegister}
       onPress={() => navigation.navigate('Register')}
       >
         <Text style={styles.textReg}>Não tenho Cadastro</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       style={styles.btnForgot}
       onPress={() => navigation.navigate('Remember')}
       >
         <Text style={styles.textPass}>Esqueci minha senha</Text>
       </TouchableOpacity>
     </View>
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
    marginTop: 90,
    justifyContent: 'center',
    paddingBottom: 70,
  },
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  helpText:{
    marginBottom:30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color:'#fff'
  },
  input:{
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 14,
    borderRadius: 7,
    
  },
  btnSubmit:{
    backgroundColor:'#2F2E41',
    width: '90%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 20
  },
  textGoogle:{
    color: '#000'
  },
  submitText:{
    color: '#fff',
    fontSize: 14
  },
  btnGoogle:{
    marginTop: 50,
    backgroundColor:'#538BF0',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 2,
    marginBottom: 10,
  },
  btnOpitions:{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 80,

  },
  btnRegister:{
    marginRight: 10,
  },
  textReg:{
    color: '#fff'

  },
  textPass:{
    color: '#fff',
    marginBottom: 20,
  }
});
