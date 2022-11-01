import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    conteiner: {
        flexDirection: "row",
        flexWrap: "nowrap",
        width: "80%",
        position: "absolute",
        bottom: -27,
    },
    input: {
        flex: 1,
        height: 54,
        padding: 16,
        borderRadius: 6,
        marginRight: 4,
        backgroundColor: colors.gray[500],
        color: colors.gray[100],
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 54,
        height: 54,
        borderRadius: 6,
        backgroundColor: colors.blueDark,
    },
    buttonContentText: {
        fontSize: 20,
        color: colors.gray[100]        
    }
})