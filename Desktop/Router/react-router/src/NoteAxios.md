First we create a folder amd import axios and exported and then create a baseURL will a local then we can change it into live .
Then will lunch a json server 
App{
    Here will import api posts then will useEffect as there's a fetching data in the useEffect will fetch data the dependendecy will be an empty array then will define a function async  a  then will use fetch code try define response to get api from posts and wont need to write if the response is ok to catch error because axios automatically catch error 
    then add response to setPosts updating state function so axios will get the posts and setting the post state   will and catch block  inside the catch will receive error that from the backend api else will catch error that is a 404 or no response at all . now after we define our function for fetch post then will call the function inside hook useEffect 

} 
App , handlesubmit{
    Now will create new post as crud operation then so in the handleSubmit will write try block and put all the code newpost inside it then define a response with a post mehtode has enpoint posts and data is a newPost component then updata the state with actuall response we get from the api response.data to allPosts array then catch error 
}
App, handleDelete{
    Now will handle this delete first will define acynchronous then will use try block inside it will manage await api.delete need to pass in endpoint post id then catch error which will be 404 or have no response 
}
App, handleEdit{
    Now we need to update post first we need a new state foe edit body and for title then will get the content for posts id datetime title body then will ues try catch block then inside try will apply response from api with an endpoint posts which will speacific to the id pf the post then will pass data will updatedPost
    then will update state setPosts function use map to eliminate old posts and add the updated posts if the post id is ok then pass data from reponse which is the same as updatedPosts if not then the post stay the same no need for updating 
    then will return updated function state to a blank after finishing updating title and body then will navigate to homepage
}
Edit{
    creating edit component import useEffect and useParams and Link useParams for we pulled in the post detail page from a parameter post id to get that id attribute that we're going to set in the route
    then will defint post to get the specific post we set toString because when it come out off the params in the url it is a string.
    now we had the post and the id so will useEffect put the dependencies will run after updating post, setEditTitle and setEdit Body then inside useEffect will sefine state to both of it  so if there's post add title and body in this way the post will fill out and we had a post update then will had in jsx the same as the newPost .
    Then if we had an editedTitle ok then do these code onsubmit will preventdefault and onclick on button will call handleedit pass in the post id.
    After we creating our new component we still didn't routed to the app.js then if we don't have an edit title will get a ink to homepage 
}
PostPage{
    will add another button to edit post 
}