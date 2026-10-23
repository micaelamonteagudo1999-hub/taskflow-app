
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import TaskDetailScreen from './src/screens/TaskDetailScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
    setScreen('home');
  };

  return (
    <View style={styles.container}>
      {selectedTask ? (
        <TaskDetailScreen
          task={selectedTask}
          onBack={() => setSelectedTask(null)}
        />
      ) : (
        <>
          <View style={styles.content}>
            {screen === 'home' ? (
              <HomeScreen
                tasks={tasks}
                onSelectTask={setSelectedTask}
              />
            ) : screen === 'profile' ? (
              <ProfileScreen />
            ) : (
              <AddTaskScreen onAddTask={handleAddTask} />
            )}
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setScreen('home')}
            >
              <Text style={styles.buttonText}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setScreen('profile')}
            >
              <Text style={styles.buttonText}>Mi perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setScreen('addTask')}
            >
              <Text style={styles.buttonText}>Crear tarea</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 12,
    paddingBottom: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    marginBottom: 8,
    backgroundColor: '#4F46E5',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
