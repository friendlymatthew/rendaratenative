import {
	StyleSheet,
	Button,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
    TextInput,
} from "react-native";

export default function PostScreen() {
	return (
		<View style={styles.container}>
			<View style={{flex: 1, }}>
				<Text
					style={{
						
						fontSize: 30,
					}}
				>
					New Rating
				</Text>
			</View>
			<View style={{ flex: 8}}>
                <View
                    style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", backgroundColor: "orange", paddingVertical: 10, paddingHorizontal: 10}}
                >
                    <Text style={{ marginHorizontal: 7}}>
                        Rating
                    </Text>
                    <TextInput styles={styles.input}/>
                    
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
    input: {
        height: 40,
        backgroundColor: "white",
    },
	button: {
		backgroundColor: "#07BEB8",
		padding: 20,
	},
	buttonText: {
		fontSize: 40,
	},
});
