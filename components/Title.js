import { Text, StyleSheet } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ddf52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddf52f',
        padding: 12,
    },
});