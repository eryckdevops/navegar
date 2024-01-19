import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, Switch } from 'react-native';
import { PropsHome } from "../../routes";
import AuthContext from "../../contexts/auth";

// import { Container } from './styles';



const Home: React.FC<PropsHome> = ({navigation, route }) => {
  const[name, setName]=useState(route.params.name)
  const { signed, signIn } = useContext(AuthContext);
  function navigateToProfile() {
    navigation.navigate('Profile', {name:name})
  }
  useEffect(()=>{
    console.log(signed)
  },[signed])

  return <View style={{ backgroundColor: '#440035', flex: 1 }}>
    <Text>Home</Text>
    <Button onPress={navigateToProfile} title={'Navigate'}>Navigate</Button>
    <Switch 
          onValueChange={signIn}
          value={signed}

    ></Switch>
    <Text style={{color:"#ffffff"}}>Welcome {route.params.name}</Text>
  </View>;
}

export default Home;