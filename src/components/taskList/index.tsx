import { useContext } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TaskContext } from "../../contexts/task/context";
import { Task } from "../taskItem";
import { styles } from "./style";

export function Tasks() {

    const { tasks, completedTasksAmount } = useContext(TaskContext);

    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                
                <View style={styles.info}>
                    <Text style={styles.created}> Criadas </Text>
                    <Text style={styles.counter}>{tasks.length}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.ended}> Concluídas </Text>
                    <Text style={styles.counter}>
                        {tasks.length === 0 ? "0" : `${completedTasksAmount} de ${tasks.length}`}
                    </Text>
                </View>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Task
                        id={item.id}
                        description={item.description} 
                        isCompleted={item.isCompleted} 
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Image source={require("../../../assets/clipboard.png")} style={styles.image}/>
                        <Text style={styles.emptyListText}>
                            Você ainda não tem tarefas cadastradas {"\n\r"}
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}