import React from 'react'
import Select from 'react-select';
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

export const MultiSelect = ({required = false, label, selectedOptions, optionsData, placeholder, setSelectedOptions, isDisabled}) => {
     /// --- react select dropdown package --- ///
     const IndicatorSeparator = () => {
        return null;
      };
  
      const DropdownIndicator = () => {
        return null;
      };

  return (
    <div className=''>
       {label && <label className="mb-2.5 block text-black dark:text-white ">{label}</label>} 
        <Select
            // {...field}
        //   required={required}
            onChange={(selectedOption) => {
                setSelectedOptions(selectedOption);
            }}
            options={optionsData}
            value={selectedOptions}
            placeholder={
                <div className="flex justify-between items-center">
                <p>{placeholder}</p>
                <FaAngleDown />
                </div>
            }
            className="w-full text-left custom-select "
            isMulti
            theme={(theme) => ({
                ...theme,
                colors: {
                ...theme.colors,
                primary: 'black',
                },
            })}
            isDisabled={isDisabled}
            components={{ IndicatorSeparator, DropdownIndicator }}
            styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  backgroundColor: '#DDDDDD'
                }),
              }}
            />
    </div>
  )
}
