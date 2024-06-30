import { Text, StyleSheet } from "react-native";

function Title({ children, customStyle }) {
    return (
        <Text style={[styles.title, customStyle]}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
});