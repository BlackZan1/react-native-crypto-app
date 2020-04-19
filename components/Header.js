import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemeContext } from 'react-native-elements';
// import { Icon } from 'react-native-elements';

const Header = ({ theme, changeTheme, convert, toggleConvert }) => {
    const onPressHandler = () => {
        console.log(theme)

        changeTheme(theme.bg === '#fff' ? 'black' : 'white');
    }

    const onToggleConvertHandler = () => {
        toggleConvert();
    }

    return (
        <View style={[header, { backgroundColor: theme.bg }]}>
            <Text style={[currency, { color: theme.color, marginLeft: 30 }]} onPress={onToggleConvertHandler}>
                {
                    convert !== '2781' ? 'RUB' : 'USD'
                }
            </Text>

            <Text style={[logo, { color: theme.color }]}>₵rypto₵ave</Text>

            <Text style={[currency, { color: theme.color, marginRight: 30 }]}  onPress={onPressHandler}> 
                {
                    theme.bg === '#fff' ? 'Dark' : 'Light'
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.13,
        shadowRadius: 1.22,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    currency: {
        fontSize: 20,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10
    }
})

const { header, logo, currency } = styles;

export default memo(Header);