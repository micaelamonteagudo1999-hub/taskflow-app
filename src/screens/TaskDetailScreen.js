
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import COLORS from '../constants/colors';

const TaskDetailScreen = ({ route }) => {
  const { task, taskId } = route.params;

  const date = task.createdAt
    ? new Date(task.createdAt).toLocaleDateString('es-AR')
    : 'Sin fecha';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>

        <Text style={styles.label}>Descripción</Text>
        <Text style={styles.text}>
          {task.description}
        </Text>

        <Text style={styles.label}>Categoría</Text>
        <Text style={styles.text}>
          {task.category}
        </Text>

        <Text style={styles.label}>Fecha de creación</Text>
        <Text style={styles.text}>{date}</Text>

        <Text style={styles.label}>ID de la tarea</Text>
        <Text style={styles.text}>{taskId}</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textSecondary,
  },
});

export default TaskDetailScreen;
