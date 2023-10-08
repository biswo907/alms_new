import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";
import { Button } from "react-native";





const LoginPage = ({ navigation }) => {

  return (
    <SafeAreaView>
      {/* <View style={{ height: DeviceHeight, width: DeviceWidth, backgroundColor: '#888' }}> */}
      <View className="h-80 w-80 bg-amber-800">
        <Button title="Go To Signup" onPress={() => navigation.navigate('signup')} />
      </View>
    </SafeAreaView>

  );
};

export default LoginPage;
