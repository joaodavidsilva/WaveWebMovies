import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	FlatList,
	View,
	TouchableHighlight,
} from "react-native";

import MovieItem from "../components/MovieItem.jsx";

export default function HomeScreen({ navigation }) {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const baseURL = "https://api.themoviedb.org/3";
		const api_key = "5859961e5c423f9197f4d173c67940ac";
		const language = "en-US";

		const url = `${baseURL}/movie/popular?api_key=${api_key}&language=${language}&page=${1}`;

		fetch(url)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size="large" color="#123" animating />
				</View>
			) : (
				<View style={styles.movie_list}>
					<FlatList
						data={data.results}
						keyExtractor={({ id }) => id}
						renderItem={({ item }) => (
							<TouchableHighlight
								activeOpacity={0.6}
								underlayColor="#FFF"
								onPress={() => navigation.navigate("Details", { movie: item, id: item.id })}
							>
								<MovieItem movie={item} />
							</TouchableHighlight>
						)}
						ItemSeparatorComponent={() => (
							<View style={{ marginTop: 20 }}></View>
						)}
						ListHeaderComponent={() => (
							<View style={{ marginTop: 20 }}></View>
						)}
						ListFooterComponent={() => (
							<View style={{ marginTop: 20 }}></View>
						)}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	movie_list: {
		marginLeft: 15,
		marginRight: 15,
	},
});
