import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MovieItem({ movie }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.movie_poster}
				source={{
					uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
				}}
			/>
			<View
				style={{
					height: "100%",
					justifyContent: "space-between",
				}}
			>
				<View>
					<View style={{ flexDirection: "row", width: 225 }}>
						<Text style={styles.movie_title}>{movie.title}</Text>
					</View>
					<Text>
						{movie.release_date.substr(0, 4)} |{" "}
						{movie.original_language.charAt(0).toUpperCase() +
							movie.original_language.slice(1)}
					</Text>
				</View>
				<View>
					<Text style={styles.movie_rating}>
						{movie.vote_average}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	movie_poster: {
		width: 100,
		height: 160,
		borderRadius: 5,
		marginRight: 10,
	},
	movie_title: {
		flex: 1,
		fontSize: 16,
		fontWeight: "bold",
	},
	movie_rating: {
		fontWeight: "bold",
	},
});
