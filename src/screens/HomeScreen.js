
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import ProfileCard from '../components/ProfileCard';
import COLORS from '../constants/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TaskFlow</Text>

        <Text style={styles.subtitle}>
          Organiza tu día, paso a paso.
        </Text>

        <ProfileCard
          name="Mica"
          role="Estudiante"
          image="https://i.pravatar.cc/150?img=47"
        />

        <Text style={styles.sectionTitle}>
          Mis tareas
        </Text>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>
            Todavía no hay tareas
          </Text>

          <Text style={styles.emptyText}>
            Aquí podrás organizar tus próximas actividades.
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
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  emptyCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.textSecondary,
  },
});

export default HomeScreen;
