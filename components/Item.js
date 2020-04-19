import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Item = ({ title, id, selected, onSelect, num }) => {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item, {
                    backgroundColor: !selected ? '#dcdcdc' : '#fff'
                }
            ]}
        >
            <Text>{num}. {title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  item: {
    width: '80%',
    marginVertical: 10,
    borderColor: '#f2f2f2',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    fontSize: 22,
    borderRadius: 10,
    alignSelf: 'center'
  }
})

export default Item;