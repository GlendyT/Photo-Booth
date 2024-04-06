import React, {useState} from "react"
import LoaderImage from "./LoaderImage"
import DragImage from "./DragImage"

const Uploader = () => {
    const [ loading, setLoading] = useState(false)
  return (
    <section>
        {loading ? <LoaderImage/> : <DragImage/>}
    </section>
  )
}

export default Uploader