import { View, Text, StyleSheet, TouchableOpacity, SectionList, Image } from 'react-native';
import { useRouter } from 'expo-router';

const courses = [
    {
        title: 'React Native',
        data: [
            {
                id: '1',
                title: 'React Native for Beginners',
                instructor: 'John Doe',
                platform: 'Udemy',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.udemy.com/course/react-native-for-beginners/',
            },
            {
                id: '2',
                title: 'React Native with Expo',
                instructor: 'Alex Johnson',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/react-native-expo',
            },
            {
                id: '3',
                title: 'React Native Crash Course',
                instructor: 'Chris Evans',
                platform: 'Pluralsight',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.pluralsight.com/courses/react-native-crash-course',
            },
        ],
    },
    {
        title: 'TypeScript',
        data: [
            {
                id: '4',
                title: 'Advanced TypeScript',
                instructor: 'Jane Smith',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/advanced-typescript',
            },
            {
                id: '5',
                title: 'Mastering TypeScript',
                instructor: 'Sarah Lee',
                platform: 'Udemy',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.udemy.com/course/mastering-typescript/',
            },
            {
                id: '6',
                title: 'TypeScript with React',
                instructor: 'Michael Scott',
                platform: 'Pluralsight',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.pluralsight.com/courses/typescript-react',
            },
        ],
    },
    {
        title: 'Python',
        data: [
            {
                id: '7',
                title: 'Python for Beginners',
                instructor: 'Angela Yu',
                platform: 'Udemy',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.udemy.com/course/python-for-beginners/',
            },
            {
                id: '8',
                title: 'Python Data Structures',
                instructor: 'Dr. Charles',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/python-data-structures',
            },
            {
                id: '9',
                title: 'Automate with Python',
                instructor: 'Brian Kernighan',
                platform: 'edX',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.edx.org/course/automate-with-python',
            },
        ],
    },
    {
        title: 'Machine Learning',
        data: [
            {
                id: '10',
                title: 'Machine Learning Basics',
                instructor: 'Andrew Ng',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/machine-learning',
            },
            {
                id: '11',
                title: 'Deep Learning Specialization',
                instructor: 'Ian Goodfellow',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/deep-learning',
            },
            {
                id: '12',
                title: 'AI with TensorFlow',
                instructor: 'Sebastian Thrun',
                platform: 'Udemy',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.udemy.com/course/ai-with-tensorflow/',
            },
        ],
    },
    {
        title: 'Data Science',
        data: [
            {
                id: '13',
                title: 'Data Science with Python',
                instructor: 'Jose Portilla',
                platform: 'Udemy',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.udemy.com/course/data-science-python/',
            },
            {
                id: '14',
                title: 'Data Analysis with R',
                instructor: 'Hadley Wickham',
                platform: 'edX',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.edx.org/course/data-analysis-r',
            },
            {
                id: '15',
                title: 'SQL for Data Science',
                instructor: 'Dr. Smith',
                platform: 'Coursera',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.coursera.org/learn/sql-for-data-science',
            },
        ],
    },
];

const CourseCatalogScreen = () => {
    const router = useRouter();

    const renderCourseItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.courseContainer}
            onPress={() => router.push(item.link)}
        >
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseInstructor}>{item.instructor}</Text>
                <Text style={styles.coursePlatform}>{item.platform}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SectionList
                sections={courses}
                keyExtractor={(item) => item.id}
                renderItem={renderCourseItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#F9F9F9',
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 5,
    },
    courseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    courseImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    courseInfo: {
        flex: 1,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    courseInstructor: {
        fontSize: 14,
        color: '#666',
    },
    coursePlatform: {
        fontSize: 12,
        color: '#4CAF50',
        marginTop: 4,
    },
});

export default CourseCatalogScreen;
