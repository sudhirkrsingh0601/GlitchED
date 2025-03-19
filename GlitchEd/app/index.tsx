import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // For icons

export const options = {
  headerShown: false, // Hide the header
};

const HomeScreen = () => {
  const router = useRouter();

  // Import the local logo image using require
  const logoImage = require('../assets/images/app-logo.png'); // Path to your logo image

  // Import the hero image using require
  const heroImage = require('../assets/images/hero-image.jpg'); // Path to your hero image

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradient from purple to blue
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Logo */}
          <Image
            source={logoImage} // Use the local logo image
            style={styles.logo}
            resizeMode="contain" // Ensure the logo fits within the specified dimensions
          />
          <Text style={styles.tagline}>Rebel against boring learning</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          {/* Hero Image */}
          <Image
            source={heroImage} // Use the hero image
            style={styles.heroImage}
            resizeMode="cover" // Ensure the image covers the entire area
          />
          <Text style={styles.heroText}>Start Your Learning Journey Today!</Text>
          <TouchableOpacity style={styles.heroButton} onPress={() => router.push('/catalog')}>
            <Text style={styles.heroButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Course Categories */}
        <View style={styles.categories}>
          <Text style={styles.sectionTitle}>Explore Course Categories</Text>
          <View style={styles.categoryGrid}>
            <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/catalog')}>
              <Ionicons name="code" size={40} color="#6a11cb" />
              <Text style={styles.categoryText}>Coding</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/course')}>
              <Ionicons name="brush" size={40} color="#6a11cb" />
              <Text style={styles.categoryText}>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/dashboard')}>
              <Ionicons name="briefcase" size={40} color="#6a11cb" />
              <Text style={styles.categoryText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => router.push('/aboutpage')}>
            <Text style={styles.footerText}>About Us</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Contact</Text>
          <Text style={styles.footerText}>Privacy Policy</Text>
          <View style={styles.socialIcons}>
            <Ionicons name="logo-facebook" size={24} color="#fff" />
            <Ionicons name="logo-twitter" size={24} color="#fff" />
            <Ionicons name="logo-instagram" size={24} color="#fff" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  hero: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroImage: {
    width: '90%', // Adjust the width as needed
    height: 300, // Adjust the height as needed
    borderRadius: 10, // Optional: Add rounded corners
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: '#ff7f50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  categories: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '30%',
  },
  categoryText: {
    fontSize: 16,
    color: '#6a11cb',
    marginTop: 10,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default HomeScreen;