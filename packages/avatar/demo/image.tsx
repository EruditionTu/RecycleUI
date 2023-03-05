import React from 'react';
import Avatar from '..';

const App = () => {
  const [src, setSrc] = React.useState(
    'https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4',
  );
  return (
    <div>
      <Avatar
        src="https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4"
        onError={(e) => {
          if (e) {
            (e.target as any).src = 'https://avatars2.githubusercontent.com/u/1680275?s=40&v=4';
          }
          return false;
        }}
      />
      <Avatar
        src={src}
        onError={
          ((e: any) => {
            if (e) {
              setSrc('https://avatars2.githubusercontent.com/u/1680275?s=40&v=4');
            }
          }) as any
        }
      />
    </div>
  );
};

export default App;
