import {
	StyleSheet,
	Button,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function PostScreen({ route, navigation }) {
	const [artist, onChangeArtist] = useState("");
	const [song, onChangeSong] = useState("");
	const [rating, onChangeRating] = useState(null);

	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home", {})}
					style={{
						backgroundColor: "yellow",
						paddingVertical: 4,
						paddingHorizontal: 6,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: 600 }}>Go Back</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					New Rating
				</Text>
			</View>
			<View style={{ flex: 7 }}>
				<View style={styles.field}>
					<Text style={styles.fieldText}>Song</Text>
					<TextInput
						style={styles.fieldInput}
						value={song}
						onChangeText={onChangeSong}
					/>
				</View>
				<View style={styles.field}>
					<Text style={styles.fieldText}>Artist</Text>
					<TextInput
						style={styles.fieldInput}
						value={artist}
						onChangeText={onChangeArtist}
					/>
				</View>
				<View style={styles.field}>
					<Text style={styles.fieldText}>Rating</Text>
					<TextInput
						style={styles.fieldInput}
						value={rating}
						keyboardType="numeric"
						onChangeText={onChangeRating}
					/>
				</View>

				<View style={{ }}>
					<TouchableOpacity>
						<Text>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
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
	field: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		flexWrap: "wrap",
		backgroundColor: "orange",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	fieldText: {
		marginHorizontal: 7,
		fontSize: 14,
		fontWeight: 600,
	},
	fieldInput: {
		height: 40,
		backgroundColor: "white",
		paddingHorizontal: 5,
	},
	button: {
		backgroundColor: "#07BEB8",
		padding: 20,
	},
	buttonText: {
		fontSize: 40,
	},
});
