
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TaskStack() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  return (
    <Stack.Navigator
      initialRouteName="TaskList"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#4F46E5',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="TaskList"
        options={{ title: 'Mis tareas' }}
      >
        {(props) => (
          <HomeScreen
            {...props}
            tasks={tasks}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="TaskDetail"
        component={TaskDetailScreen}
        options={{ title: 'Detalle de la tarea' }}
      />

      <Stack.Screen
        name="TaskForm"
        options={{ title: 'Crear tarea' }}
      >
        {(props) => (
          <AddTaskScreen
            {...props}
            onAddTask={handleAddTask}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: '#6B7280',
          tabBarIcon: ({ color, size }) => {
            const iconName =
              route.name === 'Home'
                ? 'list'
                : 'person';

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={TaskStack}
          options={{ title: 'Inicio' }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            headerShown: true,
            headerTitle: 'Mi perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
