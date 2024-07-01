

export default function TextArea ({description,handleTextArea, charCount }){
 

    return (
      <>
                  <div className="my-5">
                <label
                  className="flex float-start text-sm mb-2"
                  htmlFor="descripcion"
                >
                  Your Lyrics
                </label>
                <div className="text-sm mb-2 float-end text-black">{charCount}/280</div>
                <textarea
                  maxLength={280}
                  placeholder="Write something"
                  rows={5}
                  id="descripcion"
                  name="descripcion"
                  value={description}
                  onChange={handleTextArea}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                /> 
              </div>
      </>
    )
  }
  