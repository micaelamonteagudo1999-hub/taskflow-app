
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import ProfileCard from '../components/ProfileCard';
import COLORS from '../constants/colors';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mi perfil</Text>

        <Text style={styles.subtitle}>
          Información del usuario
        </Text>

        <ProfileCard
          name="Mica"
          role="Estudiante"
          image="https://i.pravatar.cc/150?img=47"
        />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Sobre mi perfil
          </Text>

          <Text style={styles.infoText}>
            Aquí se mostrará la información del usuario
            y sus datos personales.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.textSecondary,
  },
});

export default ProfileScreen;
