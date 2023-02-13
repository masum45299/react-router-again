import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';


function App() {
  const router=createBrowserRouter([
    {path : '/', element: <Main></Main>,children:[
      {path : '/', element: <Home></Home>},
      {path : '/Home', element: <Home></Home>},
      {path : '/About', element: <About></About>},
      {path : '/Products', element:<Products></Products>},
      {path : '/Friends',
        loader : async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
      element:<Friends></Friends>},
      {path : '/friend/:id',
        loader : async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        },
      element: 
    <FriendDetails></FriendDetails>}



    ]},
    
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
