import React, { useState } from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, View, Text } from 'react-native'

const AddTodo = () => {

    const [todo, changeTodo] = useState('');

    const handleAddTask = () => {
        if(todo) {
            console.log('todo: ', todo)
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.inputWrapper} 
        >
            <TextInput style={styles.textInput} value={todo} onChangeText={changeTodo} placeholder='Enter New Task' />
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.inputText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        width: '80%',
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: '#4630EB',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        color: '#FFF',
        fontSize: 25,
    },
});

export default AddTodo;