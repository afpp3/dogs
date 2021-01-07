import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as PostPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';
const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenuActive && styles.mobileMenuActive
          }`}
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenuActive && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <Feed />
          {mobile && 'Feed'}
        </NavLink>
        <NavLink to="/conta/stats" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post" activeClassName={styles.active}>
          <PostPhoto />
          {mobile && 'Postar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
