import {
	StyleSheet,
	Button,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
    FlatList,
} from "react-native";

export default function HomeScreen({ route, navigation }) {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Post", {})}
				>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 8, width: 380, backgroundColor: "#3c69e7" }}></View>
		</View>
	);
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
