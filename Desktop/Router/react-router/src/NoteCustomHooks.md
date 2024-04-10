We use useState about width and height for browser 
create function tohandleSize using useState 
and we set initial state which is an object width and height .
Then will useEffect to handleResize the window so this will render only at load time that's means dependency [] stays empty the purpose of using useEffect is to update DOM
Then will update state nd set states to track value of the window size and this Return the innerHTML property of width or height to window, then will call useEffect.
How to get those values to adjust window size we use eventListener 
The handleResize will run only at load time or the application closes out so we're gonna create clean up function 
then will return the value of window size windowSize because The returned cleanup function is scheduled by React and invoked at the appropriate lifecycle stage thn will return the state of window so 
{
    1 we imported useState and Effect 
    2 define a hook , set the state
    3 useEffect then we wanted to call it once at load time 
    4 then add event listener so every time the resize fires we continue to call resize function 
    5 to prevent memory leak we define cleanUp function
}
App{
    use custom hook and pass into state width 
    then pass this props to header 
}
Header{
    Destucture width and import three icons then use width props to manage the resize process
}
Now will add new component is use axios fetch hook alwys import useState and useEffect then import axios then will create function that accept data then will define state then will useEffect to make the component be mounted and also be a memory leak will check the status when we apply things then will define source this will part of axios will add cancel token to cancel the requests if the whtever reason the component is unmounted
then will define will our fetch data function  this will be the ordnary code for fetch data api then inside try block will define esponse to axios get url and cancel token of the source and then will check if the component is mounted then after get api from url we're gonna cancelToken to avoid memory leak the benefits of cancelation is:
{imporove user experience by preventing unnecessery requests and faster response times when user navigates away or interacts with the application .

 }
is mounted check ensure that state updates only occur if the  component is still mounted in the DOM and this prevents errors and potential memory leaks.
and it prevents to setData(response.data) only if the component is still present in the DOM.
Then will catch an error if the component isMounted then will setFetchError to err.message then will setData to an empty array because there's an error .
then inside finally will test the component ismounted is true then we can go to the next part .
 use axios custom hook:{
   1- define custom hook 
     2- imported axios
    3- receiving dataUrl
    4- set different states of the custom hook 
    4- inside useEffect set a condition is the component mounted and set it to true 
     and
     5-define a cancellation token for axios
     6-define a fetchData function and setData inside it and there's try,catch and finally blocks to chech if the componenet is indeed mounted to take action
     7-call fetchData into action 
  8-   define a cleanUp to cancel request if the componenet is unloaded during the request and set isMounted to false 
     9- return a data , possible error and the loading status
}
App{
    apply custom hook inside the App.js
    we will remove fetchData and apply the data to setPosts this wi run only when there's changing data
}
Home{
    will destructure 
}