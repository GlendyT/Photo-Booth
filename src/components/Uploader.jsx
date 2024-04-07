import React, {useState} from "react"
import LoaderImage from "./LoaderImage"
import DragImage from "./DragImage"

const Uploader = () => {
    const [ loading, setLoading] = useState(false)
  return (
    <section className="w-full flex justify-center ">
        {loading ? <LoaderImage/> : <DragImage/>}
    </section>
  )
}

export default Uploader