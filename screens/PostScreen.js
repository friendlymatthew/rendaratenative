import {
	StyleSheet,
	Button,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
} from "react-native";


export default function PostScreen() {


    return (
        <View style={styles.container}>
            <Text>
                Create new Rating
            </Text>
            
        </View>
    )
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
        paddingVertical: 20,
	},
	button: {
		backgroundColor: "#07BEB8",
		padding: 20,
	},
	buttonText: {
		fontSize: 40,
	},
});
