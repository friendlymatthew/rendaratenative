import {
	StyleSheet,
	Button,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";

export default function RatingScreen({ navigation, route }) {
	const { id, song, artist, rating, username } = route.params;

	return (
		<View>
			<View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical:20 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "red",
						paddingVertical: 4,
						paddingHorizontal: 7,
					}}
				>
					<Text>Update</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						backgroundColor: "red",
						paddingVertical: 4,
						paddingHorizontal: 7,
					}}
				>
					<Text>Delete</Text>
				</TouchableOpacity>
			</View>

			<Text>
				{id}, {username}, {song}, {artist}, {rating},
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("Home", {})}
				style={styles.button}
			>
				<Text>Go Back</Text>
			</TouchableOpacity>
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
		paddingHorizontal: 5,
		paddingVertical: 8,
	},
	buttonText: {
		fontSize: 40,
	},
});
