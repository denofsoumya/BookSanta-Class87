import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator =createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    Settings: {
        screen: SettingScreen
    },
    MyDonations: {
        screen: MyDonationScreen
    },
    Notifications: {
        screen: NotificationScreen
    },
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: 'Home'
}
)