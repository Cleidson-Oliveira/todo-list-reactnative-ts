import { View } from "react-native"
import { Header } from "../../components/header";
import { Tasks } from "../../components/taskList";
import { styles } from "./style";

export function Home () {
    return (
        <View style={styles.conteiner}>
            <Header />
            <Tasks />
        </View>
    );
}