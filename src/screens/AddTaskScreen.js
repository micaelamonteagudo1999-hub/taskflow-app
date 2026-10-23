
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import COLORS from '../constants/colors';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Estudio');

  const [touched, setTouched] = useState({
    title: false,
    description: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const titleError =
    title.trim().length === 0
      ? 'El título es obligatorio.'
      : title.trim().length < 5
      ? 'El título debe tener al menos 5 caracteres.'
      : '';

  const descriptionError =
    description.trim().length === 0
      ? 'La descripción es obligatoria.'
      : description.trim().length < 10
      ? 'La descripción debe tener al menos 10 caracteres.'
      : '';

  const showTitleError =
    submitted || touched.title;

  const showDescriptionError =
    submitted || touched.description;

  const isFormValid =
    titleError === '' &&
    descriptionError === '' &&
    category !== '';

  const handleAddTask = () => {
    setSubmitted(true);

    if (!isFormValid) {
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      category: category,
      createdAt: new Date(),
    };

    console.log('Tarea creada:', newTask);

    Alert.alert('Éxito', 'Tarea capturada localmente');

    setTitle('');
    setDescription('');
    setCategory('Estudio');
    setTouched({
      title: false,
      description: false,
    });
    setSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Crear tarea</Text>

          <Text style={styles.subtitle}>
            Completá los datos de tu nueva tarea.
          </Text>

          <Text style={styles.label}>Título</Text>

          <TextInput
            style={[
              styles.input,
              showTitleError && titleError
                ? styles.inputError
                : null,
            ]}
            placeholder="Ej. Estudiar React Native"
            placeholderTextColor={COLORS.textSecondary}
            value={title}
            onChangeText={setTitle}
            onBlur={() =>
              setTouched({ ...touched, title: true })
            }
            autoCapitalize="sentences"
            returnKeyType="next"
            selectionColor={COLORS.primary}
          />

          {showTitleError && titleError !== '' && (
            <Text style={styles.errorText}>
              {titleError}
            </Text>
          )}

          <Text style={styles.label}>Descripción</Text>

          <TextInput
            style={[
              styles.input,
              styles.descriptionInput,
              showDescriptionError && descriptionError
                ? styles.inputError
                : null,
            ]}
            placeholder="Contá qué necesitás hacer..."
            placeholderTextColor={COLORS.textSecondary}
            value={description}
            onChangeText={setDescription}
            onBlur={() =>
              setTouched({ ...touched, description: true })
            }
            multiline
            textAlignVertical="top"
            autoCapitalize="sentences"
            returnKeyType="done"
            selectionColor={COLORS.primary}
          />

          {showDescriptionError && descriptionError !== '' && (
            <Text style={styles.errorText}>
              {descriptionError}
            </Text>
          )}

          <Text style={styles.label}>Categoría</Text>

          <View style={styles.categories}>
            {['Estudio', 'Trabajo', 'Personal'].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.categoryButton,
                  category === item && styles.categorySelected,
                ]}
                onPress={() => setCategory(item)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === item && styles.categoryTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.saveButton,
              !isFormValid && styles.saveButtonDisabled,
            ]}
            onPress={handleAddTask}
          >
            <Text style={styles.saveButtonText}>
              Guardar tarea
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboard: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
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
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.cardBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: COLORS.text,
    marginBottom: 6,
  },
  descriptionInput: {
    minHeight: 110,
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 28,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBackground,
  },
  categorySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.text,
    fontSize: 14,
  },
  categoryTextSelected: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;
