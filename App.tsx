import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { QueryClient, QueryClientProvider } from "react-query";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Create a client for React Query
const queryClient = new QueryClient();

const Stack = createStackNavigator();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NativeBaseProvider>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								headerShown: false,
							}}
							initialRouteName="Home"
						>
							<Stack.Screen name="Launchpads" component={Home} />
							<Stack.Screen name="Detail" component={Detail} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</NativeBaseProvider>
		</QueryClientProvider>
	);
}
