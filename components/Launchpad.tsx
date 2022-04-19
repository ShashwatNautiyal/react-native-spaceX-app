import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import React from "react";
import tw from "twrnc";

const Launchpad = ({
	name,
	details,
	status,
	launches,
	onPress,
	images,
	navigation,
}: {
	name: string;
	details: string;
	status: string;
	launches: string[];
	onPress: () => void;
	navigation: any;
	images: {
		large: string[];
	};
}) => {
	return (
		<View style={tw`my-2 flex-col shadow bg-gray-100 border border-gray-200 rounded-xl`}>
			<ImageBackground
				style={tw`flex flex-col justify-end w-full h-64 `}
				imageStyle={tw`rounded-xl`}
				resizeMode="cover"
				source={{ uri: images.large[0] }}
			>
				<View style={tw`bg-black rounded-b-xl bg-opacity-30 px-2 pb-1`}>
					<Text style={tw`text-white font-bold text-xl`}>{name}</Text>
					<Text style={tw`text-white font-medium text-sm leading-4`}>
						{details.substring(0, 100).concat("...")}
					</Text>
				</View>
			</ImageBackground>
			<View style={tw`px-2 py-2`}>
				<View style={tw`flex-row`}>
					<Text style={tw`font-semibold`}>Status:</Text>
					<Text> {status}</Text>
				</View>

				<View style={tw`flex-col`}>
					<Text style={tw`font-semibold`}>Launches: </Text>
					{launches.length !== 0 ? (
						launches.slice(0, 3).map((launch: any) => (
							<TouchableOpacity
								key={launch}
								onPress={() => {
									navigation.navigate("Detail", {
										launchId: launch,
									});
								}}
							>
								<Text style={tw`underline text-blue-600`}>{launch}</Text>
							</TouchableOpacity>
						))
					) : (
						<Text>No Launch Available</Text>
					)}
				</View>
			</View>
		</View>
	);
};

export default Launchpad;
