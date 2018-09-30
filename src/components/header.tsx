import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

import * as React from 'react';

import { IPageModel } from '../model';

interface IProps {
  page: IPageModel,
  onLinkClick: (link: string) => void;
}


export class Header extends React.Component<IProps> {
  constructor(props: any) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);
    
  }
  public render() {
    let link;
    if(this.props.page.title === 'menu') {
     link = <Link to="/creditCardRegister" onClick={this.onLinkClick}><FontAwesomeIcon icon="arrow-left" size="4x" /></Link>
    }else {
     link = <Link to="/" onClick={this.onLinkClick}><FontAwesomeIcon icon="bars"  size="4x" /></Link>
    }
    return (
      <div className="hero-head">
      <nav className="navbar">
          <div className="container">
              <div className="navbar-brand">
                {link}
              </div>
          </div>
      </nav>
      </div>
    );
  }

  private onLinkClick() {
    if (this.props.page.title === 'menu'){
        this.props.onLinkClick('form')
    }else {
      this.props.onLinkClick('menu')
    }
  }
}