import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MovieDetailsScreen({ route, navigation }) {
	const { id, movie } = route.params;

	return (
		<View style={styles.container}>
			<Image
				style={styles.movie_poster}
				source={{
					uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
				}}
			></Image>
            <Text style={styles.movie_title}>{movie.title}</Text>
            <Text>{movie.vote_average}</Text>
            <Text>Duration</Text>
            <Text>{movie.runtime}</Text>
            <Text>Language</Text>
            <Text>{movie.original_language}</Text>
            <Text>Genres</Text>
            <Text>Synopsis</Text>
            <Text>{movie.overview}</Text>
            <Text>Main Cast</Text>
            <Text>Main Cast</Text>
            <Text>Director</Text>
            <Text>Director</Text>
            <Text>Similar Movies</Text>
            <Text>Similar Movies</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	movie_poster: {
		width: "100%",
		height: 200,
	},
	movie_title: {
		flex: 1,
		fontSize: 25,
        bottom: 75,
        color: "#FFF",
        marginLeft: 20,
		fontWeight: "bold"
	},
	movie_rating: {
		fontWeight: "bold",
	},
});
