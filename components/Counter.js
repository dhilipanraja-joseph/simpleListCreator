import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const Counter = () => {

    const [count, setCount]= useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Count: {count}</Text>
            <Separator />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>setCount(count+1)}
                >
                    <Text style={styles.btnText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>setCount(0)}
                >
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>setCount(count-1)}
                >
                    <Text style={styles.btnText}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
   
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    btn: {
        backgroundColor: '#4630EB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
    },

    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});

export default Counter;
  