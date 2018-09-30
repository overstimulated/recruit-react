import * as React from 'react';
import { HeaderContainer } from './components';
import { IPageModel } from './model/pageModel'

export const App: React.StatelessComponent<IPageModel> = (page) => {
  return (
    <div className="container-fluid">
      <HeaderContainer page={page}/>
    </div>
  );
}
