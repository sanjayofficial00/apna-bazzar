import React from 'react'


const AddressCard = () => {
  return (
    <div className='grid grid-cols-3 gap-5 p-4 bg-white shadow-md rounded-lg'>
        <div className='col-span-2 flex flex-col justify-center'>
            <div className='flex items-center gap-2'>
                <div className='text-sm'>Deliver to:</div>
                <div className='text-sm font-bold'><span>Sanjay Kumar,</span></div>
                <span className='text-sm font-bold'>152032,</span>
                <span className='text-sm font-bold px-2 py-1 bg-blue-100 mx-2 rounded-md'>Home</span>
            </div>
            <div className='text-info truncate w-35 mt-2 text-md text-gray-500'>
                Shop Name Arora Online Service, Rupana Post Office, Muktsar Subdistrict, Muktsar District
            </div>
        </div>
        <div className='col-span-1 flex items-center justify-end'>
            <div className='flex justify-items-center'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Change</button>
            </div>
        </div>
    </div>
  )
}

export default AddressCard