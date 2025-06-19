import { Tabs } from 'expo-router';
import { QrCode, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e9ecef',
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Regular',
          fontSize: 12,
          marginTop: 4,
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#6c757d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Generator',
          tabBarIcon: ({ size, color }) => (
            <QrCode size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}