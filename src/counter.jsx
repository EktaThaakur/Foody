import {useState} from 'react';

function Counter(props){
    const[count,setCount]= useState(0);
    return(
        <div>
            <p className="text-lg font-bold ">Count: {count}</p>
            <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>

            <div className="prop mt-4"> 
                <h1 className="text-2xl">{props.name}</h1>
            </div>
        </div>
    );
}
export default Counter;