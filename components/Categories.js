import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatergoryCard from './CatergoryCard'
import { useState } from 'react'
import { useEffect } from 'react'
import SanityClient, { urlFor } from '../sanity'


const Categories = () => {

const [ categories,setCategories] = useState([]);

useEffect(() => {
  SanityClient.fetch(`
  *[_type == "category"]
  `).then((data) => {
    setCategories(data);
  });
}, []);

  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal showsHorizontalScrollIndicator={false}>
        {/* Catergory Card */}

        {categories.map((category) =>(
          <CatergoryCard 
          key={category._id}
          imgUrl= {urlFor(category.image).width(200).url()} 
          title={category.name}/>
        ))}
        
        

    </ScrollView>
  )
}

export default Categories