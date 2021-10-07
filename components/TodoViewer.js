import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      todo: 'First Item',
      complete: 'DONE'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      todo: 'Second Item',
      complete: 'NO'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      todo: 'Third Item',
      complete: 'DONE'
    },
  ];


const TodoViewer = (props) => {

    const handleTodoPress = (todo) => {
        console.log('todo.id: ', todo.id);
    }
    
    const Todos = DATA.map(todo=> {
        
        let iconName = todo.complete==='DONE' ? 'checkmark-circle' : 'checkmark-circle-outline';
        let iconColor = todo.complete==='DONE' ? '#4630EB' : '#C0C0C0';
        return (
            <TouchableOpacity key={todo.id} onPress={()=>handleTodoPress(todo)}>
                <View style={styles.todoList}>
                    <Text style={styles.todoStyle}>{todo.todo}</Text>
                    <Ionicons name={iconName}
                        size={25}
                        color={iconColor}
                  />
                </View>
            </TouchableOpacity>
        );
    })
    
    return (
        <ScrollView 
            contentContainerStyle={styles.todoWrapper}
            keyboardShouldPersistTaps='handled'
        >
            {Todos}      
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    todoList: {
        borderColor: 'black',
        marginVertical: 2,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoStyle: {
        fontSize: 21,
    },
    todoWrapper: { 
        flexGrow: 1, 
        paddingTop: 20, 
        marginHorizontal: 10, 
    }
});

export default TodoViewer;

