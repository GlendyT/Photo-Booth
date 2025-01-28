import useRequestInfo from '../../hooks/useRequestInfo';
import ListV from './ListV';


export default function Formulario() {
  //const [to, setTo] = useState("")
  //const [from, setFrom] = useState("")
  /*const [selectedMembers, setSelectedMembers] = useState(null)
  const [cardData, setCardData] = useState(null)
  const [showForm, setShowForm] = useState(true)*/
  const { usuario, handleSubmit, handleName, handleContent} = useRequestInfo()
  const { name, content } = usuario


  /*const handleSubmit = (e) => {
    e.preventDefault()
    if(selectedMembers !== null) {
      const selected = membersBts.find((members) => members.id === parseInt(selectedMembers) )
      if (selected) {
        setCardData({
          to,
          from,
          image: selected.image,
        });
        setShowForm(false);
      }
    }
  }

  const handleRestart = () => {
    setTo("")
    setFrom("")
    setSelectedMembers(null)
    setCardData(null)
    setShowForm(true)
  }*/

  return (
    <>
      <div className="justify-center items-center flex fixed inset-10 z-40 ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border border-gray-300 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg p-5">
            <div className="flex items-center justify-center mt-5">
              <h3 className="text-2xl font-providence font-bold text-purple-800">Valentin's Day with BTS and Army</h3>
            </div>

             { /**  <div className="relative p-2 flex-auto"></div>*/}
            
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center"
            >
             <div className='mt-2 w-full'> 
              <label htmlFor="name" className=' text-purple-700 font-bold mb-2'>To: </label>
              <input
                id= "name"
                type="text"
                name='name'
                value={name}
                onChange={handleName}
                placeholder="Write the correct word"
                className="text-center font-providence border border-purple-900 rounded-xl py-2 "
              />
             </div>

             <div className='mt-4 mb-5 w-full'> 
              <label htmlFor="content" className=' text-purple-700 font-bold mb-2'>From: </label>
              <input
                id="content"
                type="text"
                name='content'
                value={content}
                onChange={handleContent}
                placeholder="Write the correct word"
                className="text-center font-providence border border-purple-900 rounded-xl py-2 "
              />
             </div>
 
           { /* <div> 
              <label htmlFor='membersBts' className=' text-purple-700 font-bold mb-2'>
                 Make a choice :
              </label>

             <select value={selectedMembers || ""} onChange={(e) => setSelectedMembers(e.target.value)}>
               <option value="" className='text-2xl font-providence font-bold text-purple-800 border border-purple-900' >  Pick a member or the group  </option>
               {membersBts.map((members) =>(
               <option key={members.id} value={members.id}> {members.name}</option>
               ) )}
             </select>
             </div> */ }

             <ListV
                
             />
            <div className='flex justify-center mt-5 items-center '>
              <button type="submit" className='text-center border border-purple-950 rounded-xl py-2 px-6 font-providence text-purple-800'>Create Card</button>
            </div>

            </form>
          </div>    
        </div>
      </div>
  
      <div className="opacity-30 fixed inset-10 z-30 bg-violet-900 "></div>
    </>
  );
}
