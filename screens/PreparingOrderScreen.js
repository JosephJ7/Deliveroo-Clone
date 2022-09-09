import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation=useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Delivery");
      },4000);
    }, []);
    
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image 
        source= {{uri:"https://media1.giphy.com/media/AslHGSmP9fETQpayYh/giphy.gif"}}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      {/* <iframe src="https://giphy.com/embed/AslHGSmP9fETQpayYh" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/DeliverooUK-love-hungry-deliveroo-AslHGSmP9fETQpayYh">via GIPHY</a></p> */}
      <Animatable.Text 
      animation="slideInUp" 
      iterationCount={2}
      className="text-lg my-10 text-white font-bold text-center"
      >Waiting for Restaurant to accept your order</Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" /> 
    </SafeAreaView>
  )
}

export default PreparingOrderScreen