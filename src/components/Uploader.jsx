import React, { useState } from "react";
import LoaderImage from "./LoaderImage";
import DragImage from "./DragImage";

const Uploader = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  return (
    <section className="w-full flex justify-center ">
      {loading ? (
        <LoaderImage file={file} setFile={setFile} setLoading={setLoading} />
      ) : (
        <DragImage setMedia={setFile} setLoading={setLoading} />
      )}
    </section>
  );
};

export default Uploader;
