import React from 'react';
import Header from './header/Header';

const data =[
  {
    title:'TopFlex'
  },
  {
    link:['item','style','about']
  },
  {
    btn:'Log in'
  }

]
const App = () => {
  return (
    <div>
      <Header data={data}/>
    </div>
  );
}

export default App;
