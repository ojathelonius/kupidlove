import { NavigationActions } from 'react-navigation';
import { NavigationParams, NavigationRoute } from 'react-navigation';


/* navService allows using navigate events throughout the app, even outside of components */
/* See https://github.com/react-navigation/react-navigation/issues/1439 */

let _container; 

function setContainer(container) {
  _container = container;
}

function reset(routeName, params) {
  _container.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
}

function navigate(routeName, params) {
  _container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

function navigateDeep(actions) {
  _container.dispatch(
    actions.reduceRight(
      (prevAction, action) =>
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  );
}

function getCurrentRoute(){
  if (!_container || !_container.state.nav) {
    return null;
  }

  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute,
};