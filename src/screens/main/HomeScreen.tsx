import { SafeAreaView, StyleSheet, View } from "react-native"
import GradientBackground from "../../components/shared/Background"
import WidgetContainer from "../../components/shared/WidgetContainer";
import { Text } from "react-native-paper";
import { Circle } from 'react-native-progress';
import Feather from '@expo/vector-icons/Feather';
import PrimaryButton from "../../components/shared/PrimaryButton";

const HomeScreen = () => {
    return (
        <GradientBackground>
 <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.widgetContainer}>
    <WidgetContainer background="black">
<Text variant="labelSmall" style={{color: 'white'}}>
    Attendance
</Text>
<Circle 
        size={50} 
        progress={0.47} 
        showsText={true} 
        thickness={2} 
        color="#25D2FD" 
        unfilledColor="#fff"
        borderWidth={0}
        formatText={() => `${Math.round(0.47 * 100)}%`}
      />
      <PrimaryButton onPress={()=> {}} style={{backgroundColor: '#EEEEEE', height: 21, padding: 0, color: '#606061'}} label={<Text> View <Feather name="arrow-right" size={20} /> </Text>} />
</WidgetContainer>
    </View>
   
 </SafeAreaView>
        </GradientBackground>
        
       
           
             
    )
}

const styles = StyleSheet.create({
    widgetContainer: {
       flexDirection: 'row',
       gap: 22,
    }
})
export default HomeScreen;