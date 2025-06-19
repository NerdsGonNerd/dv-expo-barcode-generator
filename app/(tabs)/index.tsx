import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Barcode } from '../../components/BarcodeGenerator';

const BARCODE_FORMATS = [
  { label: 'CODE128', value: 'CODE128' },
  { label: 'CODE128 A', value: 'CODE128A' },
  { label: 'CODE128 B', value: 'CODE128B' },
  { label: 'CODE128 C', value: 'CODE128C' },
  { label: 'EAN-13', value: 'EAN13' },
  { label: 'EAN-8', value: 'EAN8' },
  { label: 'EAN-5', value: 'EAN5' },
  { label: 'EAN-2', value: 'EAN2' },
  { label: 'UPC-A', value: 'UPC' },
  { label: 'UPC-E', value: 'UPCE' },
  { label: 'CODE39', value: 'CODE39' },
  { label: 'ITF', value: 'ITF' },
  { label: 'ITF-14', value: 'ITF14' },
  { label: 'MSI', value: 'MSI' },
  { label: 'MSI10', value: 'MSI10' },
  { label: 'MSI11', value: 'MSI11' },
  { label: 'MSI1010', value: 'MSI1010' },
  { label: 'MSI1110', value: 'MSI1110' },
  { label: 'Pharmacode', value: 'pharmacode' },
  { label: 'Codabar', value: 'codabar' }
];

const DEFAULT_VALUES = {
  CODE128: '123456789012',
  CODE128A: 'HELLO WORLD',
  CODE128B: 'Hello World 123',
  CODE128C: '123456789012',
  EAN13: '1234567890128',
  EAN8: '12345670',
  EAN5: '12345',
  EAN2: '12',
  UPC: '123456789012',
  UPCE: '12345678',
  CODE39: 'HELLO123',
  ITF: '1234567890',
  ITF14: '12345678901234',
  MSI: '1234567890',
  MSI10: '1234567890',
  MSI11: '1234567890',
  MSI1010: '1234567890',
  MSI1110: '1234567890',
  pharmacode: '123',
  codabar: 'A123456789B'
};

export default function BarcodeGenerator() {
  const [barcodeValue, setBarcodeValue] = useState('123456789012');
  const [selectedFormat, setSelectedFormat] = useState('CODE128');
  const [displayValue, setDisplayValue] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [lineColor, setLineColor] = useState('#000000');
  const [barcodeHeight, setBarcodeHeight] = useState(100);
  const [barcodeWidth, setBarcodeWidth] = useState(2);

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
    setBarcodeValue(DEFAULT_VALUES[format] || '123456789012');
  };

  const resetToDefault = () => {
    setBarcodeValue(DEFAULT_VALUES[selectedFormat] || '123456789012');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Barcode Generator</Text>
            <Text style={styles.heroSubtitle}>Create professional barcodes instantly</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Format Selection */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Barcode Format</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedFormat}
                onValueChange={handleFormatChange}
                style={styles.picker}
              >
                {BARCODE_FORMATS.map((format) => (
                  <Picker.Item
                    key={format.value}
                    label={format.label}
                    value={format.value}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Value Input */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Barcode Value</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.textInput, styles.flexInput]}
                value={barcodeValue}
                onChangeText={setBarcodeValue}
                placeholder="Enter barcode value"
                placeholderTextColor="#9ca3af"
              />
              <TouchableOpacity style={styles.resetButton} onPress={resetToDefault}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Customization Options */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Customization</Text>
            
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Height</Text>
                <TextInput
                  style={styles.textInput}
                  value={barcodeHeight.toString()}
                  onChangeText={(text) => setBarcodeHeight(parseInt(text) || 100)}
                  keyboardType="numeric"
                  placeholder="100"
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <View style={styles.halfWidth}>
                <Text style={styles.label}>Width</Text>
                <TextInput
                  style={styles.textInput}
                  value={barcodeWidth.toString()}
                  onChangeText={(text) => setBarcodeWidth(parseInt(text) || 2)}
                  keyboardType="numeric"
                  placeholder="2"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Background</Text>
                <TextInput
                  style={styles.textInput}
                  value={backgroundColor}
                  onChangeText={setBackgroundColor}
                  placeholder="#ffffff"
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <View style={styles.halfWidth}>
                <Text style={styles.label}>Line Color</Text>
                <TextInput
                  style={styles.textInput}
                  value={lineColor}
                  onChangeText={setLineColor}
                  placeholder="#000000"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setDisplayValue(!displayValue)}
            >
              <View style={[styles.checkbox, displayValue && styles.checkboxChecked]}>
                {displayValue && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.toggleText}>Display value below barcode</Text>
            </TouchableOpacity>
          </View>

          {/* Generated Barcode */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Generated Barcode</Text>
            <View style={styles.barcodeWrapper}>
              {barcodeValue.trim() ? (
                <Barcode
                  value={barcodeValue}
                  options={{
                    format: selectedFormat,
                    background: backgroundColor,
                    lineColor: lineColor,
                    height: barcodeHeight,
                    width: barcodeWidth,
                    displayValue: displayValue,
                    fontSize: 16,
                    textMargin: 8,
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20
                  }}
                />
              ) : (
                <View style={styles.placeholderContainer}>
                  <Text style={styles.placeholderText}>Enter a value to generate barcode</Text>
                </View>
              )}
            </View>
          </View>

          {/* Info Card */}
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Current Configuration</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Format:</Text>
              <Text style={styles.infoValue}>{selectedFormat}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Value:</Text>
              <Text style={styles.infoValue} numberOfLines={1}>{barcodeValue || 'None'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Dimensions:</Text>
              <Text style={styles.infoValue}>{barcodeWidth}×{barcodeHeight}px</Text>
            </View>
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
  heroSection: {
    height: 200,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
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
  heroTitle: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  picker: {
    height: 50,
    fontFamily: 'Inter-Regular',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    backgroundColor: '#f8fafc',
    color: '#1e293b',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexInput: {
    flex: 1,
    marginRight: 12,
  },
  resetButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
  },
  resetButtonText: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#475569',
    marginBottom: 8,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderRadius: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  checkboxChecked: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  toggleText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#475569',
  },
  barcodeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  placeholderText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#9ca3af',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  infoValue: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    flex: 1,
    textAlign: 'right',
  },
});