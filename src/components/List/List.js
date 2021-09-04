import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
    static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    }

    static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} mainImage={this.props.image}/>
            <div className={styles.description}>
                {this.props.children}
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
