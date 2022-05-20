import React, { useEffect, useState } from 'react'

function Main() {
  const [turn, setTurn] = useState('o')
  const [arr, setArr] = useState(Array(9).fill(''))
  const [result, setResult] = useState('')

  const keys = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

  const handleClick = (e) => {
    
    if(arr[+e.target.dataset.target - 1] !== '') {
      return
    }

    if(turn === 'o') {
      setArr(() => {
        arr[+e.target.dataset.target - 1] = 'o'
        return arr
      })
      setTurn('x')
    } else {
      setArr(() => {
        arr[+e.target.dataset.target - 1] = 'x'
        return arr
      })
      setTurn('o')
    }
  }
  

  useEffect(() => {
    keys.forEach(key => {
      if(arr[key[0]] !== '' && arr[key[1]] !== '' && arr[key[2]] !== '') {
        if(arr[key[0]] === arr[key[1]] && arr[key[0]] === arr[key[2]]) {
          if(result === '') {setResult(arr[key[0]])}
        }
      }
    })
  }, [turn])

  return (
    <div className="root">
      <table>
        <tbody>
          <tr>
            <td data-target="1" onClick={handleClick}>{arr[0]}</td>
            <td data-target="2" onClick={handleClick}>{arr[1]}</td>
            <td data-target="3" onClick={handleClick}>{arr[2]}</td>
          </tr>
          <tr>
            <td data-target="4" onClick={handleClick}>{arr[3]}</td>
            <td data-target="5" onClick={handleClick}>{arr[4]}</td>
            <td data-target="6" onClick={handleClick}>{arr[5]}</td>
          </tr>
          <tr>
            <td data-target="7" onClick={handleClick}>{arr[6]}</td>
            <td data-target="8" onClick={handleClick}>{arr[7]}</td>
            <td data-target="9" onClick={handleClick}>{arr[8]}</td>
          </tr>
        </tbody>
      </table>
      {result !== '' && <h3 style={{marginTop: '20px'}}>G'olib: {result}</h3>}
    </div>

  )
}

export default Main