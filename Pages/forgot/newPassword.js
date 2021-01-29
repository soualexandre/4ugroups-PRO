import React from 'react';
import { StyleSheet, 
  Text,
   View, 
   KeyboardAvoidingView
   ,Image,
    TouchableOpacity
  
  } from 'react-native';
  import {TextInput } from 'react-native-paper'


export default function Newpassword({navigation}) {
  return (
   <KeyboardAvoidingView style={styles.backgroundColor}>
     <View style={styles.containeLogo}>
       <Image 
       source={require('../../assets/security.png')}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.TextRec}>Nova senha.</Text>
       <Text style={styles.TextInfo}>Crie sua nova senha e logo após faça uma confirmação.</Text>
     
     <TextInput
       style={styles.input}
       secureTextEntry={true}
       label='Senha'
       type='password'
       autoCorrect={false}
       onChangeText={()=>{}}
       />

    <TextInput
       style={styles.input}
       secureTextEntry={true}
       label='Nova senha'
       placeholder="********"
       type='password'
       autoCorrect={false}
       onChangeText={()=>{}}
       />
       
       <TouchableOpacity
        style={styles.btnSubmit} 
        onPress={() => navigation.navigate('Success')}
       >
         <Text style={styles.submitText}>Recuperar senha</Text>
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
    paddingTop: 130,
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
    width: '90%',
    marginBottom: 15,
    borderRadius: 10,
    height:60,
    
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
