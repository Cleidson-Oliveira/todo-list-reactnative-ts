import { Image, View } from "react-native";
import { AddNewTask } from "../addNewTask";

import { styles } from "./style";

export function Header() {
    return (
        <View style={styles.conteiner}>
            <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
            <AddNewTask />
        </View>
    );
}