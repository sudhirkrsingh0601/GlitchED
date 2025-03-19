import { View, Text, StyleSheet } from 'react-native';

const about = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default about;
