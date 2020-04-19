import React from 'react';
import { Image, View } from "react-native";

export default ({ theme }) => {
    return <View style={{justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%', backgroundColor: theme}}>
        <Image source={'https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif'} />
    </View>
}