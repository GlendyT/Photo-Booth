

export default function Card({ to, from, image, onDownload, onRestart}) {

  return (
    <div className="justify-center items-center flex fixed inset-10 z-40 " >
        <div id="print" className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border border-gray-300 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg p-5">
           <div className="justify-center mt-5">
            <p className="mt-2">To: {to}</p>
             <p className="mb-4">From: {from}</p>
              <div > 
                {image && <img src={image} alt='' className='flex items-center justify-center w-40 h-40' />}
              </div>
           </div>
          </div>
        </div>
       
       <div className="flex justify-center mt-5 items-center space-x-4" >
        <button 
              type="button"
              onClick={onDownload}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
                Download
          </button>

          <button
             type="button"
             onClick={onRestart}
             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Restart
          </button>

       </div>

    </div>
  )
}
