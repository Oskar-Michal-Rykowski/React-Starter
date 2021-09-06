import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
// import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.node,
    icon: PropTypes.node,
  };
  // state = {
  //   cards: this.props.cards || [],
  // };

  static propTypes = {
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  // addCard(title) {
  //   console.log('title', title);
  //   console.log('this.props.cards', this.props.cards);
  //   this.setState((state) => ({
  //     cards: [
  //       ...state.cards,
  //       {
  //         key: state.cards.length
  //           ? state.cards[state.cards.length - 1].key + 1
  //           : 0,
  //         title,
  //       },
  //     ],
  //   }));
  // }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className="icon">
            <Icon name={icon} />
          </span>
          {' ' + title}
        </h3>

        <div>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        {/* <div>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>

        <div>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div> */}
      </section>
    );
  }
}

export default Column;
