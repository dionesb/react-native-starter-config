import { createAppContainer, createStackNavigator } from 'react-navigation';

/* Importações das 'Pages' */
import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    { Home },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
