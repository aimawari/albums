import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.name}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        height: 60,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
}

export default Header;