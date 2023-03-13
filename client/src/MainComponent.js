import axios from 'axios';
import { useCallback, useState } from 'react';
import './MainComponent.css';

const MainComponent = () => {

    const [values, setvalues] = useState([]);
    const [value, setValue] = useState('');

    const getAllNumbers = useCallback(async() => {
        // nginx => redirect to proper url
        const values = await axios.get('/api/values/all');
        setvalues(values);
    }, []);

    const saveNumber = useCallback(async (event) => {
        event.preventDefault();

        await axios.post('/api/values', {
            value
        })

        setValue('');
        getAllNumbers()
    }, [value, getAllNumbers]);

    return (
        <div>
            <button onClick={getAllNumbers}> Get all numbers </button><br />
            <span className='title'>Values</span>
            <div className='values'>
                {values.map(value => ( 
                    <div>{value}</div>
                ))};
            </div>
            <form className='form'>
                <label>Enter your value: </label>
                <input value={value} onChange={((event) => { setValue(event.target.value )})} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MainComponent;