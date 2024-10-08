import React, { ReactNode } from 'react';
import { View, Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
interface WidgetContainerProps {
    background: string;
    children: ReactNode;
} 
const WidgetContainer: React.FC<WidgetContainerProps> = ({ background, children  }) => {
 
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
     {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: (width - 88) / 3,
    height: height * 0.17,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  
});

export default WidgetContainer;
