import { StyleSheet } from "react-native";
import { FOURTH_COLOR, INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR, THIRD_COLOR } from "../commons/constans";

export const styles = StyleSheet.create({

    globalTitle: {
        color: FOURTH_COLOR,
        fontSize: 27,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontWeight: 'bold'
    },

    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 35
    },

    titleHeaderBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },

    image: { 
        width: 75, 
        height: 75, 
        alignSelf:'flex-end',
        right:10,
        flexDirection:'column',
        
    }, 

    textBody: {
        fontSize: 15
    },

    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },

    contentInput: {
        marginTop: 30,
        gap: 10
    },

    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },

    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },

    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },

    imageRegister:{
        width: 120,
        height: 125,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius:300
    },

    textRegister:{
        textAlign: 'center',
        fontSize: 30,
        color:'black',
        fontWeight:'bold',
        marginBottom: 20,
    },

    titleRegister:{
        textAlign: 'center',
        fontSize: 30,
        color:'#6b1fab',
        fontWeight:'bold',
        marginBottom: 20,
    },

    container:{
        flex:1,
        padding:20,
        backgroundColor:THIRD_COLOR,
    },
    
});