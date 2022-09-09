import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon, 
  UserIcon,
  AdjustmentsVerticalIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useState } from 'react';
import sanityClient from "../sanity";
import { useEffect } from 'react';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories] = useState([])

   useLayoutEffect(() => {
     navigation.setOptions({
      headerShown: false,
     });
   }, []);

   useEffect(() => {
     sanityClient.
     fetch(`
     *[_type == "featured"] {
      ...,
      restaurants[] =>{
      ...,
       dishes[] =>{}
   }
 }`).then((data) => {
  setFeaturedCategories(data);
 });
   
 }, []);
   

  return (
    <SafeAreaProvider>
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className='flex-row  pb-3 items-center mx-4 space-x-2 '>
        <Image 
          source={{
            uri:'https://links.papareact.com/wru'
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className= "flex-1" >
          <Text className='font-bold  text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View> 
      
        <UserIcon  size={35} color="#00CCBB" />
      </View>  

      {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
          <View className="flex-row flex-grow space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput placeholder='Restaurants and cuisines'
            keyboardType='default' />
          </View>
          
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
       
      {/* Body */}
      <ScrollView className="bg-gray-100 ">
        {/* Categories */}
        <Categories>

        </Categories>

        {/* Featured row */}

        { featuredCategories?.map((catergory) =>(
          <FeaturedRow 
           key={catergory._id}
           id={catergory._id}
          title={catergory.name}
          description={catergory.short_description}
        />
        ))}
       

      </ScrollView>

    </SafeAreaView>
    </SafeAreaProvider>
    
    
  )
}

export default HomeScreen