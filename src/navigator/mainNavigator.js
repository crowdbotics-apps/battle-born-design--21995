import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList162695Navigator from '../features/NotificationList162695/navigator';
import Settings162694Navigator from '../features/Settings162694/navigator';
import Settings162686Navigator from '../features/Settings162686/navigator';
import UserProfile162684Navigator from '../features/UserProfile162684/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList162695: { screen: NotificationList162695Navigator },
Settings162694: { screen: Settings162694Navigator },
Settings162686: { screen: Settings162686Navigator },
UserProfile162684: { screen: UserProfile162684Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
