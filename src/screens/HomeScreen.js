
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ProfileCard from '../components/ProfileCard';
import COLORS from '../constants/colors';

const HomeScreen = ({ tasks, onSelectTask }) => {
  const renderTask = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.taskCard}
        onPress={() => onSelectTask(item)}
      >
        <Text style={styles.taskTitle}>{item.title}</Text>

        <Text style={styles.taskDescription} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.taskCategory}>
          Categoría: {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

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

        <Text style={styles.sectionTitle}>Mis tareas</Text>

        {tasks.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              ¡No tienes tareas pendientes! Empieza por crear una arriba.
            </Text>
          </View>
        ) : (
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        )}
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
    paddingHorizontal: 24,
  paddingTop: 80,
  paddingBottom: 24,
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
  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textSecondary,
  },
  list: {
    paddingBottom: 20,
  },
  taskCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
    marginBottom: 10,
  },
  taskCategory: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default HomeScreen;
