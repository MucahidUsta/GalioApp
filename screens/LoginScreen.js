import { Text } from "galio-framework";
import { View } from "react-native";
import { LinkToForgotPassword, LinkToRegister } from "../Components/links";

const LoginScreen = ({navigation}) =>{
    return(
        <View>
            <Text h3>
                hello
            </Text>
            <LinkToRegister navigation={navigation} />
            <LinkToForgotPassword navigation={navigation} />
        </View>

    )
}
export default LoginScreen