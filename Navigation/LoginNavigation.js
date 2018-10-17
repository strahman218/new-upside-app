import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen'
import SignInScreen from '../Containers/Modals/SignInModal' //SignInScreen'
import SignUpScreen from '../Containers/SignUpScreen'



const ModalStack = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
    // ForgotPassword: ForgotPasswordModal,
    // ForgotUsername: ForgotUsernameModal

})

const LoginNav = createStackNavigator({
    Login: LoginScreen,
    ModalStack: ModalStack
    // SignUp: SignUpScreen
},{
    headerMode: 'float'
}
);

export default LoginNav;