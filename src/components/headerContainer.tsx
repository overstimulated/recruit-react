import { connect } from 'react-redux';

import { Header } from './header';
import { updateNavPage } from './updatePageAction';

import { IState } from '../reducers';

const mapStateToProps = (state: IState) => ({
  page: state.page
});

const mapDispatchToProps = (dispatch: any) => ({
 onLinkClick: (value: string) => dispatch(updateNavPage(value))
});

export const HeaderContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header);
