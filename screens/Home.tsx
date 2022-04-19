import { View, Text, FlatList, TouchableHighlight } from "react-native";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { myAxios } from "../axios.config";
import { TouchableOpacity } from "react-native-gesture-handler";
import Launchpad from "../components/Launchpad";
import LoadingLayout from "../components/LoadingLayout";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }: { navigation: any }) => {
	const { data, isLoading } = useQuery(["launchpads"], () => {
		return myAxios.get("launchpads").then((res) => res);
	});

	function renderLaunchpad({ item }: { item: any }) {
		return <Launchpad {...item} navigation={navigation} />;
	}

	return (
		<LoadingLayout isLoading={isLoading}>
			<View style={tw`mx-3`}>
				<Text style={tw`text-black font-bold text-2xl`}>Launchpads</Text>
				<FlatList
					numColumns={1}
					data={data?.data}
					renderItem={renderLaunchpad}
					keyExtractor={(item) => `${item.id}`}
				/>
			</View>
		</LoadingLayout>
	);
};

export default Home;
