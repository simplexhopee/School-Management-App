import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from 'react-native-paper';

const BackButton = ({ navigation }: { navigation: any }) => {
    const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Feather name="arrow-left" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default BackButton