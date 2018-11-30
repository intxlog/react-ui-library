import React from 'react'

import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class SiteContainer extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export default SiteContainer