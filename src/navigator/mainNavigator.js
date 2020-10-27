import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile162826Navigator from '../features/UserProfile162826/navigator';
import UserProfile162795Navigator from '../features/UserProfile162795/navigator';
import Tutorial162794Navigator from '../features/Tutorial162794/navigator';
import NotificationList162766Navigator from '../features/NotificationList162766/navigator';
import Settings162765Navigator from '../features/Settings162765/navigator';
import Settings162757Navigator from '../features/Settings162757/navigator';
import UserProfile162755Navigator from '../features/UserProfile162755/navigator';
import UserProfile162724Navigator from '../features/UserProfile162724/navigator';
import Tutorial162723Navigator from '../features/Tutorial162723/navigator';
import NotificationList162695Navigator from '../features/NotificationList162695/navigator';
import Settings162694Navigator from '../features/Settings162694/navigator';
import Settings162686Navigator from '../features/Settings162686/navigator';
import UserProfile162684Navigator from '../features/UserProfile162684/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile162826: { screen: UserProfile162826Navigator },
UserProfile162795: { screen: UserProfile162795Navigator },
Tutorial162794: { screen: Tutorial162794Navigator },
NotificationList162766: { screen: NotificationList162766Navigator },
Settings162765: { screen: Settings162765Navigator },
Settings162757: { screen: Settings162757Navigator },
UserProfile162755: { screen: UserProfile162755Navigator },
UserProfile162724: { screen: UserProfile162724Navigator },
Tutorial162723: { screen: Tutorial162723Navigator },
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
