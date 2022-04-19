import { View, Text, Image } from "react-native";
import React from "react";
import { myAxios } from "../axios.config";
import { useQuery } from "react-query";
import tw from "twrnc";
import LoadingLayout from "../components/LoadingLayout";

const Detail = ({ route }: { route: any }) => {
	const { launchId } = route.params;
	const { data, isLoading } = useQuery(["launches", launchId], () => {
		return myAxios
			.get("launches/" + launchId)
			.then((res) => res)
			.catch((err) => console.log(err));
	});

	return (
		<LoadingLayout isLoading={isLoading}>
			<View style={tw`mx-3 mt-6`}>
				<Text style={tw`text-center text-black font-bold text-2xl`}>{data?.data.name}</Text>
				<Text style={tw`text-center text-gray-500 font-bold text-sm`}>
					{new Date(data?.data?.date_local).toDateString()}
				</Text>
				<Image
					style={tw`h-64 w-full object-contain border border-gray-400 rounded-md my-4`}
					source={{ uri: data?.data?.links?.patch?.small }}
				/>

				<View style={tw`flex-col`}>
					<Text style={tw`font-semibold`}>Description: </Text>
					{data?.data?.details ? (
						<Text>{data?.data.details}</Text>
					) : (
						<Text>No Description Available</Text>
					)}
				</View>

				<View style={tw`flex-col my-2`}>
					<Text style={tw`font-semibold`}>Fairings reused: </Text>
					<Text>{data?.data?.fairings?.reused ? "Yes" : "No"}</Text>
				</View>

				<View style={tw`flex-col`}>
					<Text style={tw`font-semibold`}>Cores reused: </Text>
					<Text>Cores reused: {data?.data?.cores?.reused ? "Yes" : "No"}</Text>
				</View>
			</View>
		</LoadingLayout>
	);
};

export default Detail;
