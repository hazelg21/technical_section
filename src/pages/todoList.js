import { useEffect, useState, useRef } from "react"
import { Button, Form, Row, Col, Table } from "react-bootstrap"
import { FaTrash } from 'react-icons/fa';

export default function Todo() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState([])
    const [newItem, setNewItem] = useState('')

    // const [isChecked, setIsChecked] = useState(false)

    const addItem = () => {
        if (newItem !== '') {
            setContent([...content, {
                isChecked: false,
                value: newItem
            }]);
            setNewItem('')
        }
    }

    const checkItem = (idx, val) => {
        const tempArr = [...content]
        tempArr[idx].isChecked = !val
        setContent(tempArr)
    }

    const removeItem = (idx) => {
        const tempArr = [...content]
        tempArr.splice(idx, 1)
        setContent(tempArr)
    }


    return (
        <div className="activity1 d-flex flex-column">

            <h1>Todo List</h1>
            <div id="divTodo">
                <div id="divTitle">
                    <Form.Control
                        id="listTitle"
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </Form.Control>
                    <hr></hr>
                </div>

                <div id="todoDiv">

                    <Table>
                        <tbody>
                            {content.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td className="checkboxTD">
                                            <input
                                                type="checkbox"
                                                checked={item.isChecked}
                                                onChange={() => checkItem(idx, item.isChecked)}
                                            />
                                        </td>
                                        {(item.isChecked) ?
                                            <td className="checkedItem todoTD">{item.value}</td>
                                            :
                                            <td className="todoTD">{item.value}</td>
                                        }
                                        <td className="removeTD" onClick={() => removeItem(idx)}><FaTrash /></td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </Table>
                </div>

                <div id="divAddItem" className="d-flex flex-row">
                    <Form.Control
                        type='text'
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addItem()
                            }
                        }}
                    >
                    </Form.Control>
                    <Button id="addBtn" onClick={() => addItem()}>+</Button>
                </div>
            </div>
        </div>
    )
}