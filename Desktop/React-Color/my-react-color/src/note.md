First we keep app.js and index.css and index.js
 we create the square component in a new file 
Then the input component in another file by ctrl alt r => create react function with es7
Then in square we pass a prop colorValue in the parent that's a destructured 
Default prop : defines a property named defaultProps on the Square component. defaultProps is a special property used to set default values for component props. This is useful in cases where the prop might not be explicitly provided when using the component.
Here, we're setting the default value of the colorValue prop to "Empty Color Value". This means that if you use the Square component without specifying a colorValue prop, it will use the default color of "Empty Color Value".
Square.defaultProps = {
  colorValue: 'Empty Color Value'
}
Input is going to receive the color value state  also it will receive the change state setColorValue 
then make form with submit then this submit will recieve the event and prevent default state reload the page 
then a label 
then an input has a several attributes: 
autoFocus : when reload the page the user must understand the field to choose ir right away then 
type of input will be text 
placeholder the same as label
required as it is the only input to fill out 
then there is the value to male it as controll componenet which wil be equal to state coloValue 

then onchange will change the state and call the function of the usaState by an anonymous function to target the value by pssing an event 
App.js : import useState then use it inside the app function then pass to each component the state ans the change state 
Now we need to add Hexa value to colors state to App 
then pass props to component to destructure and add the same ternary statement if there state hexavalue put it if not won't display anything
then go to Input.js and destructure the setHexaValue then we need to use onChange first to join two jsx expresions we need to put it in another curly braces 
then we need to translate the hexa to color so we need to run command on terminal npm i colornames -S to save in production dependencies then we back to input component to import colornames so this colornames take the color name and tanslated into hex for us and we put it around the e target value in setHexaValue then we tarnslate into hex value then we'll set that hex value as the new state for our hex value state 
put button that toggel the color of the text so in App.js we need another state , the default state will be dark and the value in use state will be true  as the default
then we need to know where to pass it , in square that's where it dispaly so we pass it and in Input will pass both
then we destructure in square at the top then inside the style we use ternary if it is a drrk color put black in hexa else put white in hexa as it is a boolean value either it is dark or light 
Then we go to input and dertructure the props at the top in Input ad then we need to use a button to toggle the color text then onclick call function which will do the opposite state will change the dark to light s it is a default value  as it is a boolean value  