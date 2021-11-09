import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const location = useLocation();
  return { pathname: location.pathname };
};

export default usePathname;
