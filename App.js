import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Barcode } from './index';

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

export default function App() {
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

  const generateBarcode = () => {
    if (!barcodeValue.trim()) {
      Alert.alert('Error', 'Please enter a barcode value');
      return;
    }

    try {
      // The barcode will be generated automatically when the component re-renders
      return true;
    } catch (error) {
      Alert.alert('Error', 'Invalid barcode value for selected format');
      return false;
    }
  };

  const resetToDefault = () => {
    setBarcodeValue(DEFAULT_VALUES[selectedFormat] || '123456789012');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Barcode Generator</Text>
          <Text style={styles.subtitle}>Generate barcodes in various formats</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Barcode Format</Text>
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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Barcode Value</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.textInput, styles.flexInput]}
                value={barcodeValue}
                onChangeText={setBarcodeValue}
                placeholder="Enter barcode value"
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={styles.resetButton} onPress={resetToDefault}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Height</Text>
              <TextInput
                style={styles.textInput}
                value={barcodeHeight.toString()}
                onChangeText={(text) => setBarcodeHeight(parseInt(text) || 100)}
                keyboardType="numeric"
                placeholder="100"
                placeholderTextColor="#999"
              />
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Width</Text>
              <TextInput
                style={styles.textInput}
                value={barcodeWidth.toString()}
                onChangeText={(text) => setBarcodeWidth(parseInt(text) || 2)}
                keyboardType="numeric"
                placeholder="2"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Background Color</Text>
              <TextInput
                style={styles.textInput}
                value={backgroundColor}
                onChangeText={setBackgroundColor}
                placeholder="#ffffff"
                placeholderTextColor="#999"
              />
            </View>

            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Line Color</Text>
              <TextInput
                style={styles.textInput}
                value={lineColor}
                onChangeText={setLineColor}
                placeholder="#000000"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setDisplayValue(!displayValue)}
            >
              <View style={[styles.checkbox, displayValue && styles.checkboxChecked]}>
                {displayValue && <Text style={styles.checkmark}>✓</Text>}
                }
              </View>
              <Text style={styles.toggleText}>Display Value Below Barcode</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.barcodeContainer}>
          <Text style={styles.sectionTitle}>Generated Barcode</Text>
          <View style={styles.barcodeWrapper}>
            {barcodeValue.trim() && (
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
            )}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Format Information</Text>
          <Text style={styles.infoText}>
            Selected Format: <Text style={styles.infoValue}>{selectedFormat}</Text>
          </Text>
          <Text style={styles.infoText}>
            Current Value: <Text style={styles.infoValue}>{barcodeValue}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  scrollContainer: {
    paddingBottom: 30
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center'
  },
  formContainer: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    backgroundColor: '#ffffff'
  },
  picker: {
    height: 50
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#495057'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexInput: {
    flex: 1,
    marginRight: 12
  },
  resetButton: {
    backgroundColor: '#6c757d',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8
  },
  resetButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfWidth: {
    width: '48%'
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ced4da',
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  checkboxChecked: {
    backgroundColor: '#007bff',
    borderColor: '#007bff'
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  toggleText: {
    fontSize: 16,
    color: '#495057'
  },
  barcodeContainer: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 16,
    textAlign: 'center'
  },
  barcodeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 12
  },
  infoText: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 8
  },
  infoValue: {
    fontWeight: '600',
    color: '#495057'
  }
});