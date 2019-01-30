import React, { Component } from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Content from './components/content/Content';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroTitle: 'Welcome Message',
      showContentBoxs: false,
      showNavbarMenu: false,
    }
  }

  handleChangeTitle = () => {
    this.setState({
      heroTitle: 'Have a Good Time!',
    })
  }

  handleShowBox = () => {
    this.setState({
      showContentBoxs: true,
    })
  }

  handleShowNavMenu = () => {
    const currentState = !this.state.showNavbarMenu;
    const navbarMenu = document.querySelector('.navbar-menu');

    currentState ? navbarMenu.classList.add('show_block') : navbarMenu.classList.remove('show_block')
    this.setState({
      showNavbarMenu: currentState,
    })
  }

  render() {
    return (
      <>
        <Header showNavbarMenu={this.handleShowNavMenu} NavbarMenuStatus={this.state.showNavbarMenu} />
        <Hero title={this.state.heroTitle} changeTitle={this.handleChangeTitle}/>
        <Content showContentStatus={this.state.showContentBoxs} changeShowBoxs={this.handleShowBox}/>
      </>
    );
  }
}

export default App;
