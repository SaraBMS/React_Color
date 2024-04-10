useContext : it used with useState to share state between deeply nested components more easily than useState only to share state .
will use useContext instead of drilling props down.
The DataProvider : will provide the datat to diffrent components we use it inside the App.js , because the DataProvider has a children and the children are the components  it is like a container 
Now will move each states component to its right place
that doesn't need to be shared with other componetns and useContext only for data that has  incommont with other components, So will put what could be actually contained in the component that doesn't need to be sent in DataContext 