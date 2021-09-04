import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: ReactHtmlParser(settings.defaultListDescription),
    }

    render() {
        return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} mainImage={this.props.image}/>
            <div className={styles.description}>
                {this.props.description}
            </div>
            <div className={styles.columns}>
                <Column title='Monday' />
                <Column title='Tuesday' />
                <Column title='Wednesday' />
            </div>
        </section>
        )
    }
}

export default List;
