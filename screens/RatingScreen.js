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
import axios from "axios";

export default function RatingScreen({ navigation, route }) {
	const { id, song, artist, rating, username } = route.params;
	const [songInput, setSongInput] = useState("");
	const [artistInput, setArtistInput] = useState("");
	const [ratingInput, setRatingInput] = useState("");

	const deleteRow = (id, e) => {
		axios.delete("http://127.0.0.1:8000/api/ratings/" + id).then((response) => {
			console.log(response.data);
		});
	};

	const updateRow = (id, e, username, nSong, nArtist, nRating) => {
		axios
			.put("http://127.0.0.1:8000/api/ratings/" + id, {
				username: username,
				song: nSong,
				artist: nArtist,
				rating: nRating,
			})
			.then((response) => {
				console.log(response.data);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<View
			style={{
				paddingHorizontal: 15,
			}}
		>
			<Text>
				{id}, {username}, {song}, {artist}, {rating},
			</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("Home", {})}
				style={styles.button}
			>
				<Text>Go Back</Text>
			</TouchableOpacity>
			<View>
				<View styles={{ margin: 40 }}>
					<View>
						<Text>Update Song</Text>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setSongInput(text)}
							placeholder={song}
						></TextInput>
					</View>
				</View>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setArtistInput(text)}
					placeholder="Update Artist"
				></TextInput>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setRatingInput(text)}
					placeholder="Update Rating"
				></TextInput>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					marginVertical: 20,
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: "red",
						paddingVertical: 4,
						paddingHorizontal: 7,
					}}
					onPress={(e) => {
						updateRow(
							id,
							e,
							username,
							songInput === "" ? song : songInput,
							artistInput === "" ? artist : artistInput,
							ratingInput === "" ? rating : ratingInput
						);
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
					onPress={(e) => {
						deleteRow(id, e);
						navigation.navigate("Home", {});
					}}
				>
					<Text>Delete</Text>
				</TouchableOpacity>
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
	button: {
		backgroundColor: "#07BEB8",
		paddingHorizontal: 5,
		paddingVertical: 8,
	},
	buttonText: {
		fontSize: 40,
	},
	input: {
		height: 40,
		borderWidth: 1,
	},
	inputFill: {
		flex: 2,
	},
});
