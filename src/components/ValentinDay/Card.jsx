

/*export default function Card({ to, from, image, onDownload}) {

  return (
    <div className="flex items-center justify-center" >
        <div id="print" className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" border border-gray-300 items-center justify-center shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg p-5">
           <div className=" justify-center mt-5">
            <p>To: {to}</p>
             <p>From: {from}</p>
              <div className='flex items-center justify-center w-40 h-40' > 
                {image && <img src={image} alt='' />}
              </div>
           </div>
          </div>
          
          <button 
              type="button"
              className='text-center font-bold border border-xl border-purple-950 rounded-md mt-5 items-center flex justify-center cursor-pointer'
              onClick={() => {
                console.log("Download button clicked");  // Verifica si se hace clic en el botón
                if (onDownload) {
                  console.log("Calling onDownload function");  // Verifica si onDownload está definido
                  onDownload();
                } else {
                  console.log("onDownload is not defined");
                }
              }}
          >
                Download
          </button>
              
        </div>
    </div>
  )
}*/
