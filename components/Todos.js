import React from 'react';
import { View, StyleSheet } from 'react-native';

import TodoViewer from './TodoViewer';
import AddTodo from './AddTodo';

const Todos = () => {
    return (
        <View style={styles.container}>
            <TodoViewer />
            <AddTodo />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },

});

export default Todos;