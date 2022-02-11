import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function StopButton() {

    const [btnSize, setBtnSize] = useState('smallBtn')
    const [btnColor, setBtnColor] = useState('rgb(255,3,16)')

    const [r, setR] = useState(255)
    const [g, setG] = useState(3)
    const [b, setB] = useState(16)

    function changeBtn() {
        setR(Math.floor(Math.random() * (255 - 0 + 1) + 0))
        setG(Math.floor(Math.random() * (255 - 0 + 1) + 0))
        setB(Math.floor(Math.random() * (255 - 0 + 1) + 0))
        setBtnSize('largeBtn')
    }

    useEffect(() => {
        setBtnColor(`rgb(${r},${g},${b})`)
    }, [r, g, b])

    return (
        <div className="activityStop d-flex flex-row">
            <Button 
                id={`${btnSize}`}
                style={{ backgroundColor: `${btnColor}`}}
                onClick={() => changeBtn()}>STOP</Button>
        </div>
    )
}