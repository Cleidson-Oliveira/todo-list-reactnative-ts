import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskContext } from "../../contexts/task/context";
import { styles } from "./style";

export interface ITask {
    id: string,
    description: string,
    isCompleted: boolean
}

export function Task({ id, description, isCompleted }: ITask) {

    const { setTaskAsCompleted, deleteTask } = useContext(TaskContext);

    const handleDeleteTask = () => {
        deleteTask(id)
    }

    const handleCompleteTask = () => {
        setTaskAsCompleted(id)
    }

    return (
        <View style={styles.conteiner}>
            <TouchableOpacity 
                style={isCompleted ? styles.check : styles.uncheck}
                onPress={handleCompleteTask}
            >
                {isCompleted && <Image source={require("../../../assets/check.png")}/>}
            </TouchableOpacity>

            <Text style={isCompleted ? styles.taskCompletedDescription : styles.taskDescription}>
                {description}
            </Text>

            <TouchableOpacity
                onPress={handleDeleteTask}
                style={styles.trash}
            >
                <Image source={require("../../../assets/trash.png")}/>
            </TouchableOpacity>
        </View>
    );
}
