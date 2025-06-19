import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Info, Github, Mail, Star } from 'lucide-react-native';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>App preferences and information</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* App Info */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>About</Text>
            <View style={styles.infoRow}>
              <Info size={20} color="#6366f1" />
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Barcode Generator</Text>
                <Text style={styles.infoSubtitle}>Version 4.0.0</Text>
              </View>
            </View>
            <Text style={styles.description}>
              A powerful React Native barcode generator compatible with Expo. 
              Generate professional barcodes in multiple formats with customizable styling options.
            </Text>
          </View>

          {/* Features */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Supported Formats</Text>
            <View style={styles.featureGrid}>
              {['CODE128', 'EAN-13', 'UPC-A', 'CODE39', 'ITF', 'MSI'].map((format) => (
                <View key={format} style={styles.featureTag}>
                  <Text style={styles.featureText}>{format}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Links */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Links</Text>
            
            <TouchableOpacity style={styles.linkRow}>
              <Github size={20} color="#1e293b" />
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>GitHub Repository</Text>
                <Text style={styles.linkSubtitle}>View source code and contribute</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkRow}>
              <Mail size={20} color="#1e293b" />
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Contact Support</Text>
                <Text style={styles.linkSubtitle}>Get help and report issues</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkRow}>
              <Star size={20} color="#1e293b" />
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Rate This App</Text>
                <Text style={styles.linkSubtitle}>Share your feedback</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Credits */}
          <View style={styles.creditsCard}>
            <Text style={styles.creditsTitle}>Credits</Text>
            <Text style={styles.creditsText}>
              Built with ❤️ by Nicholas Mamali and JP Strydom
            </Text>
            <Text style={styles.creditsSubtext}>
              Powered by JSBarcode and React Native SVG
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#e2e8f0',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
    marginTop: -20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
  },
  infoSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginTop: 2,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#475569',
    lineHeight: 24,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureTag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  featureText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#475569',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  linkContent: {
    marginLeft: 12,
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
  },
  linkSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginTop: 2,
  },
  creditsCard: {
    backgroundColor: '#6366f1',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  creditsTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  creditsText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#e0e7ff',
    textAlign: 'center',
    marginBottom: 4,
  },
  creditsSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#c7d2fe',
    textAlign: 'center',
  },
});