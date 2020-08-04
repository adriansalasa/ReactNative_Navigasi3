import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center'}}>
     
      <Text style={{fontWeight: 'bold',marginTop:15, marginBottom:15, marginLeft: 25,
          fontFamily: 'Tahoma', fontSize:20, color:'orange'}}>The Global Leader in PC & 
          Android System Health Solutions:
      </Text>

      <Text style={{marginLeft: 25, fontSize:14, marginBottom: 20}}>PC-Doctor's system health solutions support PC 
        and Android devices that are used by OEMs, support centers, factories, 
        repair facilities, technicians, and individuals. These robust solutions 
        are comprised of patent-driven hardware diagnostics, Direct System InformationTM, 
        intelligent messaging, proactive system monitoring, and high-end reporting options throughout 
        the full system lifecycle.
      </Text>
      <Button title="Profile" 
      onPress={()=> {navigation.navigate('profile', {
            myID: 1, 
            myString: "You are here", 
            name:"Oye"
          });
        }} 
   
        />
    </View>
  )
}

function ProfileScreen({route, navigation}) {
  const{myID}=route.params;
  const{myString}=route.params;
  const{name}=route.params;

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text >Hey ID {JSON.stringify(myID)}
      </Text>
  <Text>Finally: {JSON.stringify(myString)}</Text>
  <Text>name: {JSON.stringify(name)}</Text>
  <Button title="Back" onPress={()=> navigation.goBack()} color='red' />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;