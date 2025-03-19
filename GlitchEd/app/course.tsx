import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { useRouter } from 'expo-router';

const courses = [
    {
        id: '1',
        title: 'React Native for Beginners',
        instructor: 'Abdrei Neagoie',
        image: 'https://cdn.cssauthor.com/wp-content/uploads/2023/06/Getting-Started-with-React-Native-1.jpg?strip=all&lossy=1&ssl=1',
        link: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_Keyword_Alpha_Prof_la.EN_cc.India&campaigntype=Search&portfolio=Bing-India&language=EN&product=Course&test=&audience=Keyword&topic=React_JS&priority=Alpha&utm_content=deal4584&utm_term=_._ag_1324913899912283_._ad__._kw_learn%20react_._de_c_._dm__._pl__._ti_kwd-82808243944867:loc-90_._li_155224_._pd__._&matchtype=p&msclkid=368201d26d421d8c907b660819c273a9',
    },
    {
        id: '2',
        title: 'Understanding TypeScript',
        instructor: 'Maximilian Schwarzmuller',
        image: 'https://th.bing.com/th/id/OIP.6GtW4IGpWKTMqRqE6AYzCQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        link: 'https://www.udemy.com/course/understanding-typescript/',
    },
    {
        id: '3',
        title: 'Pythonn for data science and ML',
        instructor: 'Jose Portilla',
        image: 'https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        link: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?couponCode=IND21PM',
    },
];

const ViewCoursesScreen = () => {
    const router = useRouter();

    const handleOpenLink = (url: string) => {
        Linking.openURL(url).catch((err) =>
            console.error("Failed to open link:", err)
        );
    };

    const renderCourseItem = ({ item }: { item: typeof courses[0] }) => (
        <TouchableOpacity
            style={styles.courseCard}
            onPress={() => router.push(`/course/${item.id}`)}
        >
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseInstructor}>by {item.instructor}</Text>

                {/* Link Button */}
                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => handleOpenLink(item.link)}
                >
                    <Text style={styles.linkText}>Go to Course</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Courses</Text>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                renderItem={renderCourseItem}
                contentContainerStyle={styles.courseList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    courseList: {
        gap: 16,
    },
    courseCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center',
        marginBottom: 10,
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
        marginBottom: 5,
    },
    linkButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    linkText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default ViewCoursesScreen;
