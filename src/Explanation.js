new folder - contexts

THEME CONTEXT JS THEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JSTHEME CONTEXT JS


new file
import create context 

import React, {Children, createContext} from 'react';



export the context const

export const ThemeContext = (createContext());



create class component with state () called ThemeContextProvider

set the state you want to share




Return the ____.provider component - with value property that provides object

<ThemeContext.Provider value={{...this.state}}>
</ThemeContext.Provider>


APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS APP JS 
import the provider into APP and surround the componetns you want to be provieded the data

<div className="App">
          <ThemeContextProvider>
                <Navbar></Navbar>
                <BookList></BookList>
          </ThemeContextProvider>
</div>



add Children(wrapped components in app) to the provider

    <ThemeContext.Provider value={{...this.state}}>
                    {this.props.children}
 </ThemeContext.Provider>



THERE ARE 2 WWAYS TO ACCES CONTEXT - EITHER WITH 1)STATIC CONTEXT TYPE OR 2)A CONSUMER
1))) 

NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS NAVBAR JS 
 import the theme context to the children

 import { ThemeContext } from '../contexts/ThemeContext';
 static contextType = ThemeContext


 we can now access this.context eg  console.log(this.context)

 destructuring =          const {isLightTheme, light, dark} = this.context;

 BOOKLIST  JS  BOOKLIST  JS  BOOKLIST  JS
 same as above

 2))))))

wrap jsx in ThemeContext.consumer and add function, take in context, return all the jsx 

place consts inside as well, and remove this word from this.context



CHANGIN THE DATA  CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA CHANGIN THE DATA 

create new component file themecomponent - button - on click

function to handle click mustlive inside themecontextprovider component

toggleTheme =() =>{
    this.setState({ isLightTheme: !this.state.isLightTheme});
}




toggleThemee function mnust also be passed down as value in 
<ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>


set static contexttype = 
static contextType = ThemeContext;

destructure it
const {toggleTheme} = this.context



















MULTIPLE CONTEXTS =  SAME PATTERN FOR MULTIPLE CONTEXTS eg <AUTHCONTEXT className="JS">

then simply use 2 consumer tags to cosuemt he two contexts
-which takes in a function and returns jsx

- destructure context, 