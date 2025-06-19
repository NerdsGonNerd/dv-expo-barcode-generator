import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Home } from 'lucide-react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>Page Not Found</Text>
      <Text style={styles.description}>
        The page you're looking for doesn't exist.
      </Text>
      
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Home size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 72,
    fontFamily: 'Inter-Bold',
    color: '#6366f1',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366f1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginLeft: 8,
  },
});