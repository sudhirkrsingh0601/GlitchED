import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const DashboardScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* User Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://www.creativefabrica.com/wp-content/uploads/2021/09/09/User-avatar-profile-icon-Graphics-17068385-1.jpg' }}
                    style={styles.avatar}
                />
                <Text style={styles.username}>User 1</Text>
                <Text style={styles.email}>user1@gmail.com</Text>
            </View>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>5</Text>
                    <Text style={styles.statLabel}>Enrolled Courses</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>75%</Text>
                    <Text style={styles.statLabel}>Completion Rate</Text>
                </View>
            </View>

            {/* Navigation Buttons */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/course')}>
                <Text style={styles.buttonText}>View My Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/catalog')}>
                <Text style={styles.buttonText}>Browse Catalog</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginBottom: 10,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 16,
    },
    statBox: {
        backgroundColor: '#E0E0E0',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: 140,
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

});

export default DashboardScreen;
