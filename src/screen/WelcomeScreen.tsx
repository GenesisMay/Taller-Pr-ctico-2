import React from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'; 
import { CommonActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constans';


export const WelcomeScreen = () => { 
  const navigation = useNavigation();
    
  return ( 
    <ScrollView contentContainerStyle={styles.container}> 
      <Image source={{ uri: 'https://i.pinimg.com/originals/06/a1/59/06a1595e70bd7c24eca7ee819219240e.jpg' }} style={styles.logo} /> 
      <Text style={styles.title}>¡Bienvenidos a la mejor Boutique!</Text> 

      <View style={styles.imageContainer}> 
        <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2023/10/Capa-1-768x1023.jpg' }} style={styles.image} /> 
        <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2021/10/W181816320101.jpg' }} style={styles.image} /> 
        <Image source={{ uri: 'https://www.inside-shops.ec/wp-content/uploads/2021/10/S121763575500.jpg' }} style={styles.image} /> 
      </View> 

      <Text style={styles.infoText}> 
        Nuestra boutique ofrece una amplia variedad de productos de alta calidad.  
        Visítanos para encontrar lo mejor en moda y estilo. 
      </Text> 

      <View  style={styles.contentInput}> 
        <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'LoginScreen'}))}>
          <Text style={styles.titleButton}>Login</Text> 
        </TouchableOpacity>
          
        <View /> 
        <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
          <Text style={styles.titleButton} >Register</Text> 
        </TouchableOpacity>
      </View> 
    </ScrollView> 
  ); 
}; 

const styles = StyleSheet.create({ 
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: PRIMARY_COLOR, 
  }, 
  titleButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
},
  button: {
    backgroundColor:SECUNDARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal:25,
    borderRadius: 10,
    marginTop: 30
  },
  contentInput: {
    marginTop: 10,
    gap: 10,
    alignItems:'center',
    
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
  }, 
  imageContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 20, 
  }, 
  logo: { 
    width: 150, 
    height: 150, 
    marginBottom: 20, 
  }, 
  image: { 
    width: 100, 
    height: 100, 
  }, 
  infoText: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 20, 
  }, 
  buttonContainer: { 
    width: '100%', 
    alignItems: 'center', 
  }, 
  buttonSpacing: { 
    height: 10, 
  }, 
}); 