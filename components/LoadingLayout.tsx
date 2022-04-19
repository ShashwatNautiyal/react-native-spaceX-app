import React, { ReactNode } from "react";
import { Box, Spinner } from "native-base";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingLayout = ({ isLoading, children }: { isLoading: boolean; children: ReactNode }) => {
	return (
		<SafeAreaView style={tw`flex-1`}>
			{isLoading ? (
				<Box flex={1} backgroundColor="white" alignItems="center" justifyContent="center">
					<Spinner color="emerald.500" size="lg" />
				</Box>
			) : (
				children
			)}
		</SafeAreaView>
	);
};

export default LoadingLayout;
