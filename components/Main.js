import React, { useEffect, useState } from 'react';
import { View, FlatList, StatusBar } from "react-native";
import { connect } from 'react-redux';
import { getDataAction, toggleThemeAction, themeVariants } from '../redux/appReducer';
import Header from './Header';
import CryptoItem from './CryptoItem';
import Loader from './Loader';

const Main = ({ appData, getDataAction, theme, toggleThemeAction, isFetching }) => {
    let [convert, setConvert] = useState('2781') // Dollar - 2781, Ruble - 2806

    useEffect(() => {
        if(!appData.length) {
            getDataAction(convert);
        }
    }, [getDataAction, appData, convert])

    const changeTheme = (themeName) => {
        toggleThemeAction(themeName);
    }

    const toggleConvertID = () => {
        let newConvert = convert === '2781' ? '2806' : '2781';

        setConvert(newConvert);
        getDataAction(newConvert);
    }

    return <View style={{backgroundColor: themeVariants[theme].bg}}>
        <Header 
            theme={themeVariants[theme]} 
            changeTheme={changeTheme} 
            toggleConvert={toggleConvertID} 
            convert={convert}
        />

        <StatusBar backgroundColor={themeVariants[theme].bg} barStyle={theme === 'white' ? 'dark-content' : 'light-content'} />

        {
            isFetching ? 
            <Loader theme={themeVariants[theme].bg} />
            :
            <FlatList
            style={{marginBottom: 80}}
            numColumns={1}
            keyExtractor={(item) => item.id}
            data={appData}
            renderItem={({item}) => (
                <CryptoItem 
                    convert={convert}
                    name={item.name}
                    price={item.quote[convert].price} 
                    symbol={item.symbol}
                    percent24h={item.quote[convert].percent_change_24h}
                    percent7d={item.quote[convert].percent_change_7d}
                    theme={themeVariants[theme]}
                />
            )}
            />
        }
    </View>
}

let mapStateToProps = (state) => ({
    appData: state.appData.data,
    theme: state.appData.theme,
    isFetching: state.appData.isFetching
})

export default connect(mapStateToProps, { getDataAction, toggleThemeAction })(Main);