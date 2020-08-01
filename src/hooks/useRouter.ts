import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';

/**
 * react-router-dom 편하게 사용하기 위한 hook
 */
function useRouter() {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const linkTo = history.push;
  const params: any = match.params;
  const pathName = location.pathname;
  const search = location.search;

  return {
    linkTo,
    params,
    pathName,
    search
  };
}

export default useRouter;
