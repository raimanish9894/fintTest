import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
      <FontAwesome name="angle-left" size={30} color="#2F4F4F" style={styles.topLogo} />
      <FontAwesome name="bars" size={30} color="#2F4F4F" />
      </View>
      <View style={styles.textArea}>
      <Text style={styles.title}>Shade Control</Text>
      <Text style={styles.subtitle}>Living Room</Text>
      </View>
      <View style={styles.scenes}>
        <Text style={styles.title1}>SCENES</Text>

        <View style={styles.scenesTop}>
          <View style={styles.card}>
            <FontAwesome name='rocket' size={30} color='red' style={styles.logo} />
            <Text style={styles.cardText}>All Off</Text>
          </View>

          <View style={styles.card}>
            <FontAwesome name='rocket' size={30} color='red' style={styles.logo} />
            <Text style={styles.cardText}>Bright</Text>
          </View>
        </View>


        <View style={styles.scenesTop}>
          <View style={styles.card}>
            <FontAwesome name='rocket' size={30} color='red' style={styles.logo} />
            <Text style={styles.cardText}>All Off</Text>
          </View>

          <View style={styles.card}>
            <FontAwesome name='rocket' size={30} color='red' style={styles.logo} />
            <Text style={styles.cardText}>Bright</Text>
          </View>
        </View>

      </View>

      <View style={styles.scenes}>
        <Text style={styles.title1}>GROUP CONTROLS</Text>

        <View style={styles.scenesTop}>
          <View style={styles.card}>
            
            <Text style={styles.cardText3}>More Open</Text>
          </View>

          <View style={styles.card}>
            
            <Text style={styles.cardText3}>More Close</Text>
          </View>
        </View>
        </View>

        <View style={styles.scenes}>
        <Text style={styles.title1}>CONTROLS</Text>

        <View style={styles.scenesTop}>
          <View style={styles.card1}>
            <View>
              <FontAwesome name='chevron-circle-right' color='grey' size={24}  style={styles.logo2} />
            </View>
            <View>
            <Text style={styles.cardText1}>Window Roller Blind</Text>
            <Text style={styles.cardText1}>OFF</Text>
            </View>
          </View>
        </View>

        <View style={styles.scenesTop}>
          <View style={styles.card2}>
            
            <Text style={styles.cardText2}>Open</Text>
          </View>

          <View style={styles.card2}>
            
            <Text style={styles.cardText2}>Pause</Text>
          </View>

          <View style={styles.card2}>
            
            <Text style={styles.cardText2}>Close</Text>
          </View>
        </View>

        <View style={styles.scenesTop}>
          <View style={styles.card}>
            
            <Text style={styles.cardText}>Blackout</Text>
          </View>

          <View style={styles.card}>
            
            <Text style={styles.cardText}>Flip+</Text>
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  topArea:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:24,
    marginTop:16
  },
  textArea:{
    marginTop:16,
    marginHorizontal:24
  },
  title:{
    fontSize:18,
    fontWeight:'700'
  },
  scenes:{
    marginHorizontal:8,
    marginTop:16
  },
  scenesTop:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  card:{
    flexDirection:'row',
    width:wp('45%'),
    height: 60,
    backgroundColor:'#e6e6ff',
    marginTop:10,
    alignItems:'center'
  },
  card1:{
    flexDirection:'row',
    width:wp('92%'),
    height: 75,
    backgroundColor:'#e6e6ff',
    marginTop:10,
    alignItems:'center',
    
  },
  card2:{
    flexDirection:'row',
    width:wp('29.5%'),
    height: 60,
    backgroundColor:'#e6e6ff',
    marginTop:10,
    alignItems:'center'
  },
  logo:{
    left: wp('9%'),
  },
  logo2:{
    left:8
  },
  cardText:{
    left: wp('18%'),
    fontSize:15
  },
  cardText1:{
    left:20,
    fontSize:15,
    fontWeight:'700',
  },
  cardText2:{
    left: wp('10%'),
    fontSize:15
  },
  cardText3:{
    left: wp('14%'),
    fontSize:15,
  },
  title1:{
    fontSize:16,
    fontWeight:'700',
    color:'#949c9e',
    left: wp('4%')
  },
  
});
