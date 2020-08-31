import React from 'react';
// import ReactDOM from 'react-dom';
import { Text, View, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const SearchBar = ({term,onTermChange,onTermSubmit}) => {
	return (<View style={styles.background}> 
		<Ionicons name="ios-search" style={styles.iconStyle} color="black" />
		
		<TextInput 
			placeholder="Search" 
			style={styles.inputStyle} 
			value={term} 
			onChangeText={ onTermChange } 
			onEndEditing ={  onTermSubmit }
			autoFocus={true}
			autoCapitalize = {'none'}
			autoCorrect ={false}
				/>
		</View>);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginTop: 10,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle: {
		// borderWidth:1,
		// borderColor: 'black',
		flex: 1,
		fontSize: 18
	},
	iconStyle:{
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});
export default SearchBar;