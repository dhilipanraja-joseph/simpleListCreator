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
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        fontSize: 20,        
        width: '80%',
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#4630EB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        color: '#FFF',
        fontSize: 25,
    },
});

export default AddTodo;