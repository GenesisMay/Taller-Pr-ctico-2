import React, { useState } from 'react';
import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import {THIRD_COLOR} from '../commons/constans';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

interface FormLogin {
  name: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}
  
export const RegisterScreen = () => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    name: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
});

  const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);

  const handleSetValues = (name: string, value: string) => {
      setFormLogin({ ...formLogin, [name]: value });
  }

  const handleSignIn = () => {
    if (!formLogin.name || !formLogin.lastName || !formLogin.username || !formLogin.email || !formLogin.phoneNumber || !formLogin.password) {
      Alert.alert(
          'Incompleto',
          'Por favor, ingrese los datos'
      );
      return;
  }

  Alert.alert(
      'Registro Exitoso',
      'El usuario ha sido registrado correctamente!'
  );
  console.log(formLogin);
}

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor={THIRD_COLOR} />
      <TitleComponent title='R e g i s t r o' />

      <BodyComponent>
        <View>
          <Text style={styles.titleRegister}>- Ingresa tus Datos -</Text>
          <Image source={{ uri: 'https://img.freepik.com/free-vector/feminine-instagram-highlight-icon-woman-character-sticker-earthy-illustration-vector_53876-154304.jpg' }} 
          style={styles.imageRegister} />
        </View>

        <View style={styles.contentInput}>
          <InputComponent
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='name'
          />

          <InputComponent
            placeholder='Apellido'
            handleSetValues={handleSetValues}
            name='lastName'
          />

          <InputComponent
            placeholder='Nombre de Usuario'
            handleSetValues={handleSetValues}
            name='username'
          />

          <InputComponent
            placeholder='Correo electrónico'
            handleSetValues={handleSetValues}
            name='email'
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <InputComponent
            placeholder='Número Telefónico'
            handleSetValues={handleSetValues}
            name='phoneNumber'
            keyboardType='number-pad'
          />

          <InputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPaswword}
            hasIcon={true}
            setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)}
            autoCapitalize='none'
          />
        </View>
        <ButtonComponent textButton='Registrarse' onPress={handleSignIn} />
      </BodyComponent>
  </View>
)
}