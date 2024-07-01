

export default function List({ design, setDesign, from }) {

    return (
      <div>
        <div className="my-5">
          <label className="text-sm mb-2 text-white">Design</label>
  
          <select
            name="diseño"
            placeholder="Select Your ArtWork"
            id="diseno"
            value={design}
            onChange={(e) => setDesign(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700  "
            
  
          >
            <option value="">Select your artwork </option>
            <option value="dday">D-Day</option>
            <option value="d2">D-2</option>
            <option value="agustd">Agust D</option>
            <option value="pp2">People Pt2</option>
            <option value="hgm">Haegum</option>
            <option value="yc">Yoongi Special Collage</option>
  
          </select>
          
        </div>
      </div>
    );
  }
  