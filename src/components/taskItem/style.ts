import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    conteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        height: 64,
        padding: 16,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: colors.gray[500],
    },
    uncheck: {
        width: 18,
        height: 18,
        padding: 12,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.blueDark,
        backgroundColor: "transparent",
    },
    check: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        padding: 12,
        borderRadius: 15,
        backgroundColor: colors.purpleDark
    },
    taskDescription: {
        flex: 1,
        marginHorizontal: 12,
        textAlign: "left",
        color: colors.gray[100]
    },
    taskCompletedDescription: {
        flex: 1,
        marginHorizontal: 12,
        textAlign: "left",
        color: colors.gray[300],
        textDecorationLine: "line-through",
        fontSize: 14
    },
    trash: {
        padding: 12
    }
})