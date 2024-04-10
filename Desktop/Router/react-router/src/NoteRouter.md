First we will import files in index.js then 
wrap our website with BrowserRouter then put App as a component inside the router so the App is a parent component with no path but an index we sdefine that with / slash 
Now will import at App component components that will stay on the page consistent when other components change .
Missing page is for 404 the page that does not exist
Then will define prps for Router : Route, Switch, and Hook : useHistory which is allows us to reach to history browser 
Now will put them in a jsx
Now will  switch between those elements to show only the main elments using Switch which will have the nested changing components, then will route each component of path
The missing will be the path is * that's mean that it acts as a catch all fo any undefined URLs just like 404 error page.
So the Layout component has the Header and Nav and Home and all the other components in Outlet represents all the nested component inside so Outlet will be our main and about and everything that shows in the blog
the Home will render by default and replaced by the outlet nested 
Nav: {When submit onn form we should prevent the default chore by event with anonymous function 
Always has a lable beacuse it will be part of the DOM itsel and  the screen  renders will use it .
Input in the input we set id which will be identical to lable for html and type text and value which most of time will be the props that passed in then it will the contoled input then onchange will change the state by the second props . then the navigation link will unorderd list whch will have a links then will define our state in App.js 
will define state and set to an empty string as it id the search results as it will be changing 
then will need a data to search through so eill define a new state this state posts and setPosts will have id and title , datetime and body . then will define another state will searchResult and that will be an array as well 
 }
 Home :{ in the App  will pass posts to home as it will show as feed there 
then in the Home will pass the props posts 
and inside the main will deal with posts then will have a ternary statement whch will say if there is a posts then display it in a Feed component else display a paragraph says no posts to display
 } 
 Feed{
    will use a fragment 
    then will map on each post and then make a component to each post which will has a key as you map through 
 }
 Post {
    will dfine Link as react-router will led to individual post with an id then will use in postBody ternary statement which will say if post body lenght less than 25 charecter will display it else will slice to become 25 and put ... ellipsis then if you click on the link will display the whole post body 
 }
 PostPage{
    In this component will find the individual post 
    then will have a post use the two ampersands this is a way of saying okay if the post is true or it's exist 
    then another condition what if the post does not exist 
 }
 App,handleDelete {
     this function will have a parameter id whuch will pass throught the the posts and filter it on each post and have only the posts with its own id that passed in then will set a new state which will be the listPosts that doesn't have post with id then will use navigate which will delete the podt from the browser the useNavigate : accepts value prpos  like link or delts to go to history stack so the navigate ('/ ')
    will go to home page when delete operation completed 
     }
     App{
        then will create a new post so we need to define new state for the title and for the body then will handle a submit function  
     }
     NewPost{
        first wil destructuring props then will need in newpost a form has a submit , input lable this input will be a controlled component so it will have a value then onChange will call the change state function and change it based on the new value which will be the new state then will have the postBody then will have a button to submit
     }
     App, handleSubmit{
        Inside the handleSubmit we need to get to the last post id then put a datetime then we need to create our new post which will have id, title, datetime and body .
        then will set allposts which will be the old posts and the newpost to create an object then add allpost to new state setPosts then retun titlt and body post to empty string after we submited then back to home page after we're creating new post by navigate
     }
    App , useEffect{
        Now will work with searchResult state so the dependency will be posts and search so if this dependencies change useEffect will run again 
        Now will filter this new data to match the search results  first will have the posts state to filter then for each post will have a body to match lowercase then includes the search value with it to become also lowercase then will have || short circuit operator  which will alows us to look for the title then will set the filterdResults to updating function with reverse methode to show the last results at the top of all then will change the prps for home in jsx to searchResult instead of post  
            }