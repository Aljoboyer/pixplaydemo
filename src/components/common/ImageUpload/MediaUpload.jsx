import React from 'react'
import { FaImages } from "react-icons/fa";

const MediaUpload = ({handleImageChange}) => {

    
  // dragging image
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };


  const fileDrop = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    const file = e.dataTransfer.files[0];
  };


  return (
    <div
    className={` text-center px-4 pt-7 pb-6 border-2 border-gray-300 border-dashed rounded-lg w-full h-auto`}
  >

    <div
      draggable={true}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      onClick={() => setErrMsg(null)}
    >
      <div className="space-y-1 justify-center align text-center">
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="images"
            className=" mx-auto relative cursor-pointer bg-white rounded-md font-normal text-base block"
          >
            <div className='mx-auto w-[200px] h-[100px] bg-white flex flex-row justify-center items-center'>
            <FaImages size={80}/>
            </div>
            <p className="text-xl md:text-2xl font-normal">Select Files to Upload</p>
            <p className=" mt-2 rounded py-2 w-[150px]  mx-auto text-white bg-blue-900 text-base md:text-xl">
                Browse
            </p>
          </label>
          <input
            id="images"
            name="images"
            type="file"
            className="sr-only"
            accept="image/png, image/jpg"
            // required
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MediaUpload