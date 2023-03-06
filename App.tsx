import * as React from 'react';
import './style.css';

export default function App() {
  const response = {
    name: 'Manu',
    age: 21,
    characteristics: {
      height: '6 feet',
      complexion: { color: 'red', eyebrow: 'black' },
      hair: 'black',
    },
    techStack: {
      language: 'Javascript',
      framework: {
        name: 'Nextjs',
        version: '12',
      },
    },
  };

  const flattenObj = (obj) => {
    let res = {};
    for (const i in obj) {
      // console.log(i, obj[i], typeof obj[i]);
      if (typeof obj[i] === 'object') {
        const temp = flattenObj(obj[i]);
        console.log('temp', temp);
        // all recursives done, build new key with parent obj
        for (const j in temp) {
          res[i + '.' + j] = temp[j];
        }
      } else {
        res[i] = obj[i];
      }
    }
    return res;
  };

  console.log(flattenObj(response));

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
