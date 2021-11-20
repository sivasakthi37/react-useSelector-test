import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector((state) => state.count.count)

  const [countState, setCountState] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setCountState(count)
  }, [count])

  return (
    <div className="jumbotron">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ paddingBottom: '90px', fontSize: '65px' }}>
          {countState}
        </div>
        <div
          className="col-md-8 offset-md-2"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <button
            onClick={() => {
              dispatch({
                type: 'INCREMENT',
              })
            }}
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch({
                type: 'DECREMENT',
              })
            }}
            className="btn btn-primary"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export { App }
