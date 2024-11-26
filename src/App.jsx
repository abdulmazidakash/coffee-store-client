
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
     
     <div className='m-20'>

        <Link to='/addCoffee' className='btn bg-gradient-to-r from-emerald-500 to-teal-500 w-full'>Add Coffee</Link>
        <h1 className='text-6xl text-center my-20 text-purple-500'>Coffee store client: {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
     </div>

      
    </>
  )
}

export default App
