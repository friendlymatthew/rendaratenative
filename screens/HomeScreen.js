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
			backgroundColor: "#0891B2",

			marginVertical: 10,
			flexDirection: "row",
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
			<Text
				style={{
					fontSize: 20,
					fontWeight: 600,
					color: "white",
					opacity: 80,
				}}
			>
				{rating.song}
			</Text>
			<Text>{rating.artist}</Text>
		</View>
		<Text style={{ fontSize: 30, fontWeight: 600 }}>{rating.rating}</Text>
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
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Post", {})}
				>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 8, width: 380 }}>
				<Animated.FlatList
					data={data}
					renderItem={renderItem}
					bounces={false}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ECFEFF",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 20,
	},
	button: {
		backgroundColor: "#07BEB8",
		paddingHorizontal: 8,
		paddingVertical: 6,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 600,
		opacity: 0.7,
	},
});
