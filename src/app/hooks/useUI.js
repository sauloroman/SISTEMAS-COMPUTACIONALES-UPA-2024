import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../store/ui/ui.slice';

export const useUI = () => {
  const dispatch = useDispatch();
  const { alert, isMenuOpen } = useSelector((state) => state.ui);

  const openMenu = () => {
    dispatch( setMenu( true ) );
  };

  const closeMenu = () => {
    dispatch( setMenu( false ) );
  };

  return {
    alert,
    isMenuOpen,

    // Methods
    openMenu,
    closeMenu,
  };
};
