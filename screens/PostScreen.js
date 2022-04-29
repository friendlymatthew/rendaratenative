import {
    StyleSheet,
    Button,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostScreen({ navigation }) {
    const [state, setState] = useState({
        username: "",
        song: "",
        artist: "",
        rating: 0,
    });

    const [submit, setSubmit] = useState(false);

    const [submitError, setSubmitError] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (submit) {
            return navigation.navigate("Home");
        }
    });

    const handleUsernameChange = (input) => {
        setState((state) => ({
            ...state,
            username: input,
        }));
    };

    const handleSongChange = (input) => {
        setState((state) => ({
            ...state,
            song: input,
        }));
    };

    const handleArtistChange = (input) => {
        setState((state) => ({
            ...state,
            artist: input,
        }));
    };

    const handleRatingChange = (input) => {
        setState((state) => ({
            ...state,
            rating: input.replace(/[^1-5]/g, ""),
        }));
    };

    const handleSubmit = () => {
        console.log("Submit res form:", state);

        axios
            .get("http://127.0.0.1:8000/api/ratings")
            .then(function (response) {
                let matches = response.data.filter(
                    (item) =>
                        item.username === state.username &&
                        item.song === state.song &&
                        item.artist === state.artist
                );
                if (matches.length > 0) {
                    setSubmitError(true);
                } else {
                    axios
                        .post("http://127.0.0.1:8000/api/ratings", {
                            username: state.username,
                            song: state.song,
                            artist: state.artist,
                            rating: state.rating,
                        })
                        .then(function (response) {
                            console.log(response);
                            setSubmit(true);
                        })
                        .catch(function (error) {
                            setError(true);
                            setSubmitError(false);
                            if (error.response) {
                                console.log(error.response.data);
                            } else if (error.request) {
                                console.log(error.request.data);
                            } else if (error.message) {
                                console.log(error.message.data);
                            }
                        });
                }
            })
            .catch(function (error) {
                setError(true);
                setSubmitError(false);
                if (error.response) {
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log(error.request.data);
                } else if (error.message) {
                    console.log(error.message.data);
                }
            });
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    New Rating
                </Text>
            </View>
            <View style={{ flex: 8 }}>
                <View style={styles.field}>
                    <Text style={{ marginHorizontal: 7 }}>Username</Text>
                    <TextInput
                        styles={styles.input}
                        onChangeText={(text) => handleUsernameChange(text)}
                        value={state.username}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={{ marginHorizontal: 7 }}>Song</Text>
                    <TextInput
                        styles={styles.input}
                        onChangeText={(text) => handleSongChange(text)}
                        value={state.song}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={{ marginHorizontal: 7 }}>Artist</Text>
                    <TextInput
                        styles={styles.input}
                        onChangeText={(text) => handleArtistChange(text)}
                        value={state.artist}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={{ marginHorizontal: 7 }}>Rating</Text>
                    <TextInput
                        styles={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleRatingChange(text)}
                        placeholder="Enter a value 1-5"
                        value={state.rating}
                    />
                </View>
            </View>
            {error && (
                <View>
                    <Text>An error occurred. Please try again.</Text>{" "}
                </View>
            )}
            {submitError && (
                <View>
                    {" "}
                    <Text>
                        You already rated this song. Please try again.
                    </Text>{" "}
                </View>
            )}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home", {})}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
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
    input: {
        height: 40,
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#07BEB8",
        padding: 20,
        margin: 20,
    },
    buttonText: {
        fontSize: 40,
    },
    field: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});