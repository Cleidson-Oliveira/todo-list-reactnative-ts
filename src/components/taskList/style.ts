import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        width: "100%",
        padding: 16,
        marginTop: 55,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[300],
    },
    info: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    created: {
        color: colors.blue,
        fontWeight: "bold",
        fontSize: 14
    },
    ended: {
        color: colors.purple,
        fontWeight: "bold",
        fontSize: 14
    },
    counter: {
        backgroundColor: colors.gray[400],
        color: colors.gray[200],
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginHorizontal: 6
    },
    emptyList: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 100,
        resizeMode: 'contain'
    },
    emptyListText: {
        color: colors.gray[300],
        textAlign: "center",
    },
})