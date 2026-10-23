
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../constants/colors';

const TaskDetailScreen = ({ task, onBack }) => {
  const date = task.createdAt
    ? new Date(task.createdAt).toLocaleDateString('es-AR')
    : 'Sin fecha';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>
            ← Volver a Inicio
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Detalle de la tarea</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Título</Text>
          <Text style={styles.title}>{task.title}</Text>

          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.description}>
            {task.description}
          </Text>

          <Text style={styles.label}>Categoría</Text>
          <Text style={styles.value}>{task.category}</Text>

          <Text style={styles.label}>Fecha de creación</Text>
          <Text style={styles.value}>{date}</Text>
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
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: COLORS.cardBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
    marginTop: 50,
  },
  backButtonText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginBottom: 6,
    marginTop: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  value: {
    fontSize: 15,
    color: COLORS.text,
  },
});

export default TaskDetailScreen;
