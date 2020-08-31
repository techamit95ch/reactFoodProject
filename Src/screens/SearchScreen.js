 import React,{ useState } from 'react';
 import SearchBar from "../component/SearchBar";
 
 import { Text,View, TouchableOpacity,StyleSheet} from 'react-native';
 const SearchScreen = () =>{
     const [ term, setTerm] = useState('');
     return (<View>
        <SearchBar 
            term={term} 
            onTermChange = 
                { newTerm => {
                    setTerm(newTerm)}} 
            onTermSubmit = { console.log('Term Submit') }
            />
         <Text> SearchScreen</Text>
         <Text>{ term }</Text>
     </View>);
 }
  const styles = StyleSheet.create({
     
  });
  export default SearchScreen;
  