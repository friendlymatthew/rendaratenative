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
		<SafeAreaView style={{ flex: 1}}>
		<View
			style={{
				paddingHorizontal: 15,
				backgroundColor: "#001a30",
				height: 10000,
			}}
		>
			<TouchableOpacity
				onPress={() => navigation.navigate("Home", {})}
				style={styles.button}
			>
				<Text style={{ color: "white", fontSize: 30, fontWeight: "600" }}>
					Go Back
				</Text>
			</TouchableOpacity>
			<View
				style={{
					justifyContent: "center",
					flexDirection: "row",
					marginVertical: 20,
				}}
			>
				<Text style={{ color: "white", fontSize: 30, fontWeight: "600" }}>
					Update
				</Text>
			</View>

			<View style={{ margin: 40, paddingHorizontal: 30 }}>
				<Text style={{ fontSize: 20, color: "white" }}>Update Song</Text>

				<TextInput
					style={styles.input}
					onChangeText={(text) => setSongInput(text)}
					placeholder={song}
					styles={{ backgroundColor: "#FFC800" }}
				></TextInput>

				<Text style={{ fontSize: 20, color: "white", }}>Update Artist</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setArtistInput(text)}
					placeholder="Update Artist"
				></TextInput>

				<Text style={{ fontSize: 20, color: "white",  }}>Update Rating</Text>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					onChangeText={(text) => setRatingInput(text)}
					placeholder="Enter a rating 1-5"
					maxLength={1}
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
						backgroundColor: "#db0a40",
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
					<Text style={{ fontSize: 30, color: "white", fontWeight: "600" }}>
						Update
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						backgroundColor: "#db0a40",
						paddingVertical: 4,
						paddingHorizontal: 7,
					}}
					onPress={(e) => {
						deleteRow(id, e);
						navigation.navigate("Home", {});
					}}
				>
					<Text style={{ fontSize: 30, color: "white", fontWeight: "600" }}>
						Delete
					</Text>
				</TouchableOpacity>
			</View>
		</View>
		</SafeAreaView>
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
		backgroundColor: "#db0a40",
		paddingHorizontal: 5,
		paddingVertical: 8,
	},
	buttonText: {
		fontSize: 40,
	},
	inputText: {
		color: "white",
		fontSize: 20,
	},
	input: {
		height: 80,
		marginVertical: 10,
		marginBottom: 10,
		fontSize: 20,
		color: "#001a30",
		fontWeight: "600",
		backgroundColor: "#FFC800",
		paddingHorizontal: 20,
		borderWidth: 1,
	},
	inputFill: {
		flex: 2,
	},
});
