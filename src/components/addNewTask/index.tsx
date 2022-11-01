import { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TaskContext } from "../../contexts/task/context";
import { colors } from "../../styles/colors";
import { styles } from "./style";

export function AddNewTask() {
    const [ taskDescription, setTaskDescription ] = useState('');

    const { createTask } = useContext(TaskContext);

    const handleCreateTask = () => {
        createTask(taskDescription);
        setTaskDescription("");
    }

    return (
        <View style={styles.conteiner}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray[300]}
                value={taskDescription}
                onChangeText={setTaskDescription}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handleCreateTask}
            >
                <Text style={styles.buttonContentText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}