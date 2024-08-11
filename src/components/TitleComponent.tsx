import React from 'react'
import { Text, TextStyle, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props{
    title:string;
}

export const TitleComponent = ({title}:Props) => {
    const {height}=useWindowDimensions();
  return (
    <Text style={{
        ...styles.globalTitle,
        height:height*0.10
    }}>{title}</Text>
  )
}