/**
 * @class ExampleComponent
 */

import * as React from 'react';
import styles from './styles.css';


export type Props = { text: string }

const ExampleComponent = (props:Props) => {
  React.useEffect(() => {
    console.log("Hello");
  }, []);

  const {
    text
  } = props

  return (
    <div className={styles.test}>
      Example Component: {text}
    </div>
  )
}

export default ExampleComponent;
