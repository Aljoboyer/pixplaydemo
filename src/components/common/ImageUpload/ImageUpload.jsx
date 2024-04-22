import React from 'react'
import { MdPersonAddAlt1 } from "react-icons/md";

const ImageUpload = () => {
  return (
    <div
    // draggable={true}
    // onDragOver={dragOver}
    // onDragEnter={dragEnter}
    // onDragLeave={dragLeave}
    // onDrop={fileDrop}
   
  >
    <div className="">
      <div className=" text-sm text-gray-600">
        <label
          htmlFor="images"
          className="  cursor-pointer  rounded-md font-normal text-base block"
        >
          <p className="bg-[#DDDDDD] my-2 px-4 w-[100px] h-[80px]">
                <MdPersonAddAlt1 size={70} color=''/>
          </p>
         
        </label>
        <input
          id="images"
          name="images"
          type="file"
          className="sr-only"
          accept="image/png, image/jpg"
          // required
        //   onChange={handleImageChange}
        />
      </div>
    </div>
  </div>
  )
}

export default ImageUpload;