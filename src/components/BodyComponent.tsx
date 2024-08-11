import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const BodyComponent = (props: any) => {
    
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.contentBody,
            height: height * 100
        }}>
            {props.children}
        </View>
    )
}
