import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state= {
    selected: "profile"
  }

  clickMenu = (e) => {
    this.setState({
     selected: e.target.id
    }) 
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. 
    Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    //Can't just call a class as a function. Has to be <classComponent />
    //function component can be called as function component functionName()
   let details
   if (this.state.selected === "profile" ) {
    details = Profile()
   } else if (this.state.selected === "photo" ) {
    details = <Photos />
  } else if (this.state.selected === "cocktail" ) {
    details = <Cocktails />
  } else if (this.state.selected === "pokemon" ) {
    details = <Pokemon />
  }

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar changeSelected={this.clickMenu} selected={this.state.selected}/>
        {details}
      </div>
    )
  }

}

export default MainBox
