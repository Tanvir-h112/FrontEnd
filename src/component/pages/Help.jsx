import { useState, useEffect } from "react";
import Layout from "../input-group/layout/Layout";
import React from "react";

function Help(){
    const [state, setState] = useState({name : ''})
    // const [name, setName] = useState('')

  useEffect(()=> {
    setTimeout(()=> {
      setState({name: 'Tanvir Hossain'})
  }, 3000)
    console.log('use Effect Called')
  }, [])

console.log('Rerendering')
  


const data  = [
    {
      name: 'Tanvir Hossain Ridoy',
      email: 'tanvir@gamil.com'
    },
    {
      name: 'Rasel Ahmed',
      email: 'rasel@gamil.com'
    },
    {
      name: 'Mizanur Rahman',
      email: 'mizan@gamil.com'
    },
    {
      name: 'Mahabur Rahman',
      email: 'rahman@gamil.com'
    },
    {
      name: 'Mahafuz Rahman',
      email: 'mahfuz@gamil.com'
    }
  ] 
//  const data = []

    return (
        <Layout>
            {/* //short circuit operation */}
          {/* { name && <h1>Hello, { name } I am Help Page</h1> }
          {!name && <h1>Hello Guest I am Help Page</h1>} */}

          {/* ternary Operation */}
          {
            state.name ? (<h1>Hello, { state.name } I am Help Page</h1>) : (<h1>Hello Guest I am Help Page</h1>
          )}

           {data.length > 0 ? ( 
           <ul>
             <li> 
                {data.map((item)=>  (
                  <li> {item.name}, {item.email} 
                </li>
                   ))} 
                 </li> 
           </ul> ) : 
           ( <p>There is no data</p> )}
         </Layout>
    )
}

export default Help;