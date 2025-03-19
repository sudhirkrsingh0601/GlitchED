import { View, Text, StyleSheet, Image } from 'react-native';

const AboutPage = () => {
    return (
        <View style={styles.container}>
            {/* App Logo */}
            <Image
                source={{ uri: 'https://via.placeholder.com/120' }}
                style={styles.logo}
            />

            {/* App Name */}
            <Text style={styles.title}>GlitchEd</Text>

            {/* Description */}
            <Text style={styles.description}>
                GlitchEd is an innovative learning platform designed to help you master new skills through a personalized learning experience.
                Browse a wide range of courses, track your progress, and achieve your learning goals with ease!
            </Text>

            {/* Version and Developer Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Version:</Text>
                <Text style={styles.infoValue}>1.0.0</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Developed by:</Text>
                <Text style={styles.infoValue}>Team GlitchEd</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 22,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    infoLabel: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '500',
    },
});

export default AboutPage;
