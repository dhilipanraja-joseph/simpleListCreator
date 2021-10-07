import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';

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
      complete: 'NO'
    },
  ];


const Todo = ({ todo }) => {
    return (
        <View>
            <Text>{todo.todo}</Text>
        </View>
    );
}

const TodoViewer = (props) => {
    
    const Todos = DATA.map(todo=> {
        return (
            <View key={todo.id}>
                <Text>{todo.todo}</Text>
            </View>
        );
    })
    
    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
            {Todos}      
        </ScrollView>
    );
}

const styles = StyleSheet.create({
      

});

export default TodoViewer;

