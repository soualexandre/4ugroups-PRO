  
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";
import { block } from "react-native-reanimated";

class Category extends Component {
    render() {
        return (
            <View style={{ height: '100%', width: 220,
             marginLeft: 20, 
              borderColor: '#dddddd',  
              borderRadius: 50,
              }}>
                <View>
                    <ImageBackground source={this.props.imageUri}
                        style={{fwidth: null, height: 103 }}
                   >
                       <View style={{flex:1}}>
                       <Text style={{flex:1, color:'#fff', fontSize: 18, marginLeft: 10,marginTop:8, fontWeight: 'bold',}} >{this.props.project}</Text>
                       <Text style={{textAlign: 'right',fontSize: 12, marginRight: 10, marginBottom: 8, color:'#fff', fontWeight: 'bold',  }} >{this.props.author}</Text>
                       </View>
                   </ImageBackground>
                    
                </View>
            </View>
        );
    }
}
export default Category;

