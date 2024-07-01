

export default function Botones({handleLogout, handleDownloadImage}) {

    const handleDownload = () => {
      handleDownloadImage()

      }
  return (
    <div className='mt-10 flex flex-row gap-4'>
    <button className="bg-pink-600 py-1 px-4 text-white rounded-lg uppercase font-bold hover:bg-black hover:text-[#5abecd] transition-all"onClick={handleDownload}>Download</button>
    <button className="bg-pink-600 py-4 px-4 text-white rounded-lg uppercase font-bold hover:bg-black hover:text-[#5abecd] transition-all" onClick={handleLogout}>Restart</button>
  </div>
  )
}
