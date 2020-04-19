import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export const icons = {
    BTC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png',
    ETH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png',
    XRP: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png',
    BCH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327336/bch_2x_hahroi.png',
    LTC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/ltc_fjbqjf.png',
    DASH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609484/dash_oltvqi.png',
    XEM: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/nem_imprip.png',
    BCC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/bitconnect_oj1bo5.png',
    XMR: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/monero_wzk3ur.png',
    NEO: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/neo_fvoo6c.png',
    MIOTA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512510148/miota_2x_xkby9u.png',
    ADA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1513434489/cardano_unympj.png',
    BTG: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1513434542/bitcoin-gold_reytam.png',
    XLM: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326886/xlm_2x_jfwlwt.png',
    ADA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326874/ada_2x_g4fs0c.png',
    IOTA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327102/miota_2x_zsvtqc.png',
    TRX: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326885/trx_2x_ukhxjm.png',
    EOS: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326878/eos_2x_dvr7p0.png',
    USDT: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAAAclBMVEUnoXz///8AmnHm9PATnXbg8OvG4til0cEAmXC/4NQZnncYnncInHTj8u0gn3n7/v3z+vhyvKNkt5zR6ODY7OUAlmqu1shCq4o0p4SYzLqIxrGBwqyy2ctVsZPL5t2m08NtuZ9ctZiSybZ8v6g7qIdLrI2CKKKTAAAE/ElEQVR4nO3bbX+aPBjGYQwBeYgRgfEkgqJ8/6+4EKxtt6sUWquwncere72nP/k3CRCcYQAAAAAAAAAAAAAAAAAAADyEYA/Bn32cU4jKfIhkSVWYtXoIVzz7SCdAFAKiEBCFgCgERCEgCgFRCIhCQBQCohAQhYAoBEQhIAoBUQiIQkAUAqIQEIWAKAREISAKgW0eE8VeUhSvWY8RfHy41qg3OHvPPtIpPD7Cr4FJZv8a8w6LajKOGIqypIlxT4hCQBQCohAQhYAoBEQhIAoBUQiIQkAUAqIQEIWAKC+klD7nQgjGhrcOGFN/SXDPk/LZn/mnSM/vOoisDc/FunSreBNsP26yWgWBFdlukhe7sDW6QPxfqqMGhmCy3RWJHQ9stQ3ampFbF8eUqzjestNITw2O7Ni4UfB6dFZV1urXf2qzT9aU7HIIz01eu5Fl3n5sVmURGo5Y5p6b5MJJ90l8nSJBrH7TYSq71YSrdUJPhU8WWqmXn25hEb7R7pratq5xg6reqTL+ksaM9AU75VHfw7Trc8oFtSZMOfvoNUkIeSjq67gL7CZ1xDJGjOTs0kR9D7c4qCWSf7RAfuWUrKekH+a2LrO195L5P3cw9+GztNYrgFnufPbJAP/6dUo3ObO9q8PEjTHr8cL9Qh+n1VycEUvhNy/ePMEO/W+gOoq5Dhdh1N0yEtQXNm4J/P4VrVSLl6sHZsHnuOpKnutZ3ojRH+8ul/lSZGX3gmA3vxsDL9WPj2054V/13eveR7R6Etlzu6yTB30CLp0pL7rbDaHk+p02Ez/0T8t0E3NSkzveJctMvyie1Qzielqvymkf6o5bB05/J3Ce0wRi/UVm/KyRYoj+Ve6c/p0yu96yndmUV90viuP2ryrnFIXX12MpnAkD+F5RPHFtsgrnNH0M+XJ3H7ds9Ae7TxTP2b3sTMzsK3Ayu22ZVCEbefl2hyhSiP3t+3XVvJp0d6/27YCCuh1z62OIga8LjjlAdfMTuq97mvmkBe0x2PHNZmPQ3STzTy4xvdytotgyg+Blu3a7DQLTtOLILoajdls2WWG/2eWN0rmNE81zzq/7hsqm3F+E4AM3h57e1FecG/1H9eOPm8hux6pt7Hf7vdFhygr/UNI5uat3tnHZnAyu992+++ay23vzs2Pu/rEWdfflc03SkcI/2389uggsty5OF8N/eZAz+hCk9Dy9l+kb6bGpq83f712GTMw5iSYFDxN6CQ02kVvn+/BwyfQs6B93cfH2q7H6B/p/qXmXpYdjkSduvKEfjsT5Yeyp7umkWgV3t5180rZbUK2oct0ySeq67r9Brf6jTsrStSNrYwaDT8uCah3KxRS5UudL/1CUX37+NdgjObdi/GbWvEiPM5GGTRkNPyIdXcOskv0pU1Nr6U9Q+ydaRhru12W1CaaPHHXtYtllvjtd5PKfmr6nziNqBWXcyNrTrljX3TP2geETRLZbrvP98dBmaolSq+/SB8ew/jSrRs/wVzH656sTTt//Bnxph4AoBEQhIAoBUQiIQkAUAqIQEIWAKAREISAKAVEIiEJAFAKiEBCFgCgERCEgCgFRCIhCQBQCohAQhYAoBEQhIAoBUQiIQkAUAqIQEIWAKAREISAKAVEIiEJAFAKiEBCFgCgERCEgCgFRCIhCQBQCohAQhYAoBEQhIApFOB/6b5sAAAAAAAAAAAAAAAAAAMA8/QY8cl5b4cEQ8AAAAABJRU5ErkJggg==',
    BSV: 'https://miro.medium.com/max/1024/1*vV3WEJdVnjW5rTkw2GaJcg.png',
    BNB: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Binance-Coin-BNB-icon.png',
    XTZ: 'https://pbs.twimg.com/profile_images/1017374364227047425/gc6a6fGi.jpg',
    LINK: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx0-iILdJJrxRPH6mQ9dc704iBv5aUZGt9h4kg727gKA_8NbkS&usqp=CAU',
    LEO: 'https://s2.coinmarketcap.com/static/img/coins/200x200/3957.png',
    HT: 'https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100000983/logo/huobi-token-ht-logo.png'
}

export default ({ name, price, symbol, percent7d, percent24h, theme, convert }) => {
    return (
        <View style={[ item, { backgroundColor: theme.bg } ]}>
            <View style={{width: '45%'}}>
                <Avatar rounded source={{uri: icons[symbol]}} />

                <Text style={[title, { marginTop: 10, color: theme.color }]}>{ name }, <Text style={{color: '#696969'}}>{ symbol }</Text></Text>
            </View>

            <View style={{width: '30%'}}> 
                <Text style={{marginVertical: 5, color: theme.color}}>24h: <Text style={{color: percent24h < 0 ? 'crimson' : 'green'}}>{percent24h.toFixed(4)}</Text></Text>

                <Text style={{marginVertical: 5, color: theme.color}}>7d: <Text style={{color: percent7d < 0 ? 'crimson' : 'green'}}>{percent7d.toFixed(4)}</Text></Text>
            </View>

            <Text style={priceTitle}>{
                convert === '2781' ? '$' : '₽'
            }{ price.toFixed(2) }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 2,
        borderColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceTitle: {
        fontSize: 20,
        color: 'green',
        width: '25%'
    },
    title: {
        fontSize: 18
    }
})

const { item, priceTitle, title } = styles;