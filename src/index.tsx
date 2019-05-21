/**
 * @class ExampleComponent
 */

import axios from 'axios';
import * as React from 'react';
import styles from './styles.css';

export type Props = { text: string }

const ExampleComponent = (props:Props) => {
  const [response, setResponse] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('http://example.com/movies.json');
      setResponse(resp.data)
    };
    fetchData();
  }, []);

  const {
    text
  } = props

  return (
    <div className={styles.test}>
      Example Component: {text}
      {!!response && JSON.stringify(response)}
    </div>
  )
}

export default ExampleComponent;
