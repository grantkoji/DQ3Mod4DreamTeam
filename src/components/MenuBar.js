import React from 'react'

const MenuBar = ({changeSelected, selected}) => {

  



  return (
    <div className="ui four item menu">
      <a className={'item' + (selected==='profile' ? 'active' : null)} id="profile" onClick={changeSelected}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={'item' + (selected==='photo' ? 'active' : null)} id="photo" onClick={changeSelected}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={'item' + (selected==='cocktail' ? 'active' : null)} id="cocktail" onClick={changeSelected}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={'item' + (selected==='pokemon' ? 'active' : null)} id="pokemon" name="pokemon" onClick={changeSelected}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

//For this click event, all of the children inside the a tag need to have the same id as the a tag. 
//Clicking inside the a tag, something inside the a tag was clicked. 
//When we do e.target.id...since it doesn't have the id profile, it's going to not register in the click handler


// Alternate solution:
// class MainBox extends React.Component {

//   state= {
//     selected: "profile"
//   }

//   clickMenu = (selected) => {
//     this.setState({
//      selected: selected
//     }) 
//   }

//   const MenuBar = ({changeSelected, selected}) => {

// const clickHandler = e => {
//   changeSelected(e.target.id)

// }
// <div className="ui four item menu">
// <a className={'item' + (selected==='profile' ? 'active' : null)} id="profile" onClick={clickHandler}>
//   <i className="user large icon" id="profile"/>
// </a>

 /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */