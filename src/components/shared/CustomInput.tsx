import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ListRenderItem,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather'; // For right-side icon

interface CustomInputProps extends TextInputProps {
  data?: string[];
  onSelect?: (item: string) => void;
  setValue?: (item: string) => void;
  placeholder: string;
  showAutocomplete?: boolean; // Prop to control autocomplete
  password?: boolean; // Prop for password functionality
  leftIcon?: React.ReactNode; // New prop for optional left icon
}

const CustomInput: React.FC<CustomInputProps> = ({
  data = [],
  placeholder,
  onSelect,
  showAutocomplete = false, // Default is false
  password = false, // Default is false
  leftIcon, 
  setValue,
  ...props
}) => {
  const [query, setQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(!password);
  const { colors, fonts } = useTheme();

  const handleInputChange = (text: string) => {
    setQuery(text);
    setValue(text);

    if (showAutocomplete && text && data) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelect = (item: string) => {
    setQuery(item);
    setFilteredData([]);
    if (onSelect) onSelect(item);
  };

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <Text
        variant="bodyLarge"
        style={[styles.item, { color: colors.primary }]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: colors.primary,
                fontSize: fonts.bodyLarge.fontSize,
                fontFamily: fonts.bodyLarge.fontFamily,
                color: colors.primary,
              },
            ]}
            value={query}
            onChangeText={handleInputChange}
            placeholder={placeholder}
            placeholderTextColor={colors.primary}
            secureTextEntry={password && !isPasswordVisible} // Toggles password visibility
            {...props}
          />
          {password && (
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.icon}
            >
              {!isPasswordVisible ? (
                <Feather name="eye-off" size={15} color={colors.primary} />
              ) : (
                <Feather name="eye" size={15} color={colors.primary} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showAutocomplete && filteredData.length > 0 && (
  <View style={{ maxHeight: 200 }}> 
    <FlatList
      style={styles.list}
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      keyboardShouldPersistTaps="handled" 
      scrollEnabled={false}
    />
  </View>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 30, // Add padding to the right for the icon
  },
  icon: {
    position: 'absolute',
    right: 10, // Position the icon inside the input field on the right
    top: 12, // Vertically center the icon
  },
  leftIconContainer: {
    width: 30, // Fixed width for left icon container
    justifyContent: 'center',
    alignItems: 'center', // Center the icon within the container
  },
  listContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    backgroundColor: '#D9E1E8',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CustomInput;


