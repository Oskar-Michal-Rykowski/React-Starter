import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  //   static propTypes = {
  //     logo: PropTypes.node,
  //   };

  render() {
    const { logo } = settings;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">
              <Icon name={logo} />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

// Header.propTypes = {
//   children: PropTypes.node,
// };

export default Header;
