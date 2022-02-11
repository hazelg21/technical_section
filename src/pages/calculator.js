import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

export default function Calculator() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(0)

    const reset = () => {
        setNum1('')
        setNum2('')
    }

    useEffect(() => {
        setResult(Number(num1) + Number(num2))
    }, [num1, num2])


    return (
        <div className="activity1 d-flex flex-column">

            <h1>Calculator</h1>
            <h2>{result}</h2>
            <Row className="d-flex flex-row justify-content-center my-3 mx-5">
                <Col className="inputColcol-12 col-md-6 mt-3">
                    <Form.Control
                        type='Number'
                        value={num1}
                        placeholder="Input 1"
                        onChange={(e) => setNum1(e.target.value)}
                    >
                    </Form.Control>
                </Col>
                <Col className="col-12 col-md-6 mt-3">
                    <Form.Control
                        type='Number'
                        value={num2}
                        placeholder="Input 2"
                        onChange={(e) => setNum2(e.target.value)}
                    >
                    </Form.Control>
                </Col>
            </Row>

            <Button onClick={() => reset()}>Reset</Button>

        </div>
    )
}