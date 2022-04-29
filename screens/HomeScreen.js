import {
	StyleSheet,
	Button,
	Text,
	Animated,
	Pressable,
	SafeAreaView,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = (rating) => (
	<Pressable
		style={{
			backgroundColor: "#00D2BE",
			marginVertical: 10,
			flexDirection: "row",
			borderBottomEndRadius: 15,
			borderBottomLeftRadius: 15,
			paddingVertical: 10,
			flexWrap: "wrap",
			paddingHorizontal: 20,
			alignItems: "center",
			justifyContent: "space-between",
		}}
		onPress={() =>
			rating.navigation.navigate("Rating", {
				id: rating.id,
				song: rating.song,
				artist: rating.artist,
				rating: rating.rating,
				username: rating.username,
			})
		}
	>
		<View style={{}}>
			<Text style={{ opacity: 0.8, fontSize: 14, paddingVertical: 3 }}>
				Posted by {rating.username}
			</Text>
			<Text
				style={{
					fontSize: 30,
					fontWeight: "600",
					opacity: 80,
				}}
			>
				{rating.song}
			</Text>
			<Text style={{}}>{rating.artist}</Text>
		</View>
		<Text style={{ fontSize: 30, fontWeight: "600" }}>{rating.rating}</Text>
	</Pressable>
);

export default function HomeScreen({ route, navigation }) {
	const [data, setData] = useState([]);

	const [errorFlag, setErrorFlag] = useState(false);

	const renderItem = ({ item }) => (
		<Item
			artist={item.artist}
			id={item.id}
			rating={item.rating}
			song={item.song}
			username={item.username}
			navigation={navigation}
		/>
	);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/ratings")
			.then((response) => {
				console.log(response.data);

				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
				setErrorFlag(true);
			});
	});
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#80142B", height: 60 }}>
			<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							flexDirection: "row",
							padding: 10,
							backgroundColor: "#80142B",
						}}
					>
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate("Post", {})}
						>
							<Text style={{ color: "white", fontSize: 30, fontWeight: "600" }}>
								Create
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flex: 1 }}></View>
				<View style={{ flex: 8, width: 380 }}>
					<Animated.FlatList
						data={data}
						renderItem={renderItem}
						bounces={false}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#c6c6c6",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 20,
	},
	button: {
		backgroundColor: "#80142B",
		paddingHorizontal: 8,
		paddingVertical: 6,
	},
	buttonText: {
		fontSize: 20,
		color: "#FFFFFF",
		fontWeight: "600",
		opacity: 0.7,
	},
});
