import { useContext } from 'react';
import { RouteContext } from '../context/RouteProvider';
export const useRouteContext = () => {
  const { currentRoute, setCurrentRoute } = useContext(RouteContext);

  return {
    currentRoute,
    setCurrentRoute
  };
}