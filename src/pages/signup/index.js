import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { DeviceHeight, DeviceWidth } from '../../constants/Dimenssion'
import { Button } from 'react-native'

const SignUp = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={{ height: DeviceHeight, width: DeviceWidth, backgroundColor: "#333" }}>
                <Button title='Go To Login' onPress={() => navigation.navigate("login")} />
            </View>
        </SafeAreaView>


    )
}

export default SignUp
