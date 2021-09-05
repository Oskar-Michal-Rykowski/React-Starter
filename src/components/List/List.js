import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
// import Column from '../Column/Column';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // };

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
  };

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  };

  // addColumn(title) {
  //   console.log('this.props.columns', this.props.columns);
  //   this.setState((state) => ({
  //     columns: [
  //       ...state.columns,
  //       {
  //         key: state.columns.length
  //           ? state.columns[state.columns.length - 1].key + 1
  //           : 0,
  //         title,
  //         icon: 'list-alt',
  //         cards: [],
  //       },
  //     ],
  //   }));
  // }

  render() {
    const { title, image, description } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} mainImage={image} />
        <div className={description}>{ReactHtmlParser(description)}</div>
        {/* <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div> */}
      </section>
    );
  }
}

export default List;
