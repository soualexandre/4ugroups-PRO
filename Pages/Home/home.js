import React from 'react';
import { StyleSheet, 
  Text,
   View, 
   KeyboardAvoidingView
   ,Image,
    TextInput,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
import Category from '../../componnts/Explore/category'

export default function Dashboard({navigation}) {
  return (
   <KeyboardAvoidingView style={styles.backgroundColor}>
     <View style={styles.container}>
       <Text style={styles.TextRec}>Bem vindo, Alexandre!</Text>
       <Text style={styles.textNote}>Não esqueça de atualizar suas skills para participar de projetos legais!</Text>

     </View>
     <ScrollView
     scrollEventThrottle={16}
     >
       <View style={{flex:1}}>
         <Text style={{ marginBottom: -12,marginTop: 50, marginBottom: -10,fontSize: 14, fontWeight: '700', paddingHorizontal: 20}}>
          Projetos pendentes
         </Text>

        
         <View style={{ height: 130, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                      <Category project='GreenFarm' author="Alexandre" imageUri={require('../../assets/corp.jpg')}
                                    />
                                    <Category project='4youGroups' author="Andé" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                    <Category  project='NavBlind' author="André" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                </ScrollView>
                            </View>
       </View>
     </ScrollView>



     <ScrollView
     scrollEventThrottle={16}
     >
       <View style={{flex:1}}>
         <Text style={{ marginBottom: -12,fontSize: 14, fontWeight: '700', paddingHorizontal: 20}}>
          Projetos em andamento
         </Text>

        
         <View style={{ height: 130, marginTop: 20, borderRadius: 50}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                     <Category project='4youGroups' author="Carlos" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                    <Category project='GreenFarm' author="Alexandre" imageUri={require('../../assets/corp.jpg')}
                                    />
                                    <Category  project='NavBlind' author="André" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                </ScrollView>
                            </View>
       </View>
     </ScrollView>




     <ScrollView
     scrollEventThrottle={16}
     >
       <View style={{flex:1}}>
         <Text style={{ marginBottom: -12,fontSize: 14, fontWeight: '700', paddingHorizontal: 20}}>
          Projetos Concluídos
         </Text>

        
         <View style={{ height: 130, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category project='GreenFarm' author="André" imageUri={require('../../assets/corp.jpg')}
                                    />
                                    <Category project='4youGroups' author="Carlos" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                    <Category  project='NavBlind' author="André" imageUri={require('../../assets/scroll.jpg')}
                                    />
                                </ScrollView>
                            </View>
       </View>
     </ScrollView>


   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundColor:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

   container:{
    justifyContent: 'center',
    width: '90%',
  },
  TextRec:{
    marginTop:100,
    color: '#4880E6',
    fontWeight: 'bold',
    fontSize: 28,
  },
  
});
