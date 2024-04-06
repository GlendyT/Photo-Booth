import React, { useState } from 'react'

const DragImage = () => {
  const [error, setError] = useState(false)
  const [messageError, setMessageError] = useState("")
  return (
    <div>
      <h2>Upload Your Image</h2>
      <div>File Should be in jpge, png</div>
      {error && <div>{messageError}</div>}

      <input
       type='file'
       name='file'
      />
      <div>
        <img/>
        <span>
          Click or Drag your Image Here
        </span>
      </div>

      <button> Take the Picture</button>
    </div>
  )
}

export default DragImage