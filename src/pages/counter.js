import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap'

export default function Counter() {

    const [counter, setCounter] = useState(0)
    const [oddEven, setOddEven] = useState('Even')

    function updateCounter(set) {
        if (set === 'add') {
            setCounter(prev => prev + 1)
        } else if (set === 'minus' && counter !== 0) {
            setCounter(prev => prev - 1)
        }
    }

    useEffect(() => {
        if (counter % 2 === 0) {
            setOddEven('Even')
        } else {
            setOddEven('Odd')
        }
    }, [counter])


    return (
        <div className="activity1 d-flex flex-column">
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <h3>{oddEven} number</h3>
            <div className="flex-row my-3">
                <Button className='mx-2' onClick={() => updateCounter('minus')}>Decrement</Button>
                <Button className='mx-2' onClick={() => updateCounter('add')}>Increment</Button>
            </div>
            <Button onClick={() => setCounter(0)}>Reset</Button>
        </div>
    )
}