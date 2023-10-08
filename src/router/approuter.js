import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as page from "../pages"
import * as RoutsKey from "../constants/route"


const AppRouter = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RoutsKey.SIGNUP}>
                    <Stack.Screen name={RoutsKey.LOGIN} component={page.LoginPage} />
                    <Stack.Screen name={RoutsKey.SIGNUP} component={page.SignUp} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppRouter
