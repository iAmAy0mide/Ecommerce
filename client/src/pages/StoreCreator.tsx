import { useState, useEffect } from 'react';

const StoreCreator = () => {
  return (
    <div>
        <h1 className='text-xl font-bolder mb-4'>Register a Seller Account</h1>
        <SellerForm />
    </div>
  )
}

export default StoreCreator;

function SellerForm(): JSX.Element {
  const [inputData, setInputData] = useState<SellerData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
        ...prevData,
        [name]: value
      })
    );
  }

  useEffect(() => {})
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
  }

    return (
        <form action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='firstName'
            value={inputData.firstName}
            onChange={handleChange}
            placeholder='FirstName' />
          <input 
            type="text" 
            name='lastName' 
            value={inputData.lastName}
            onChange={handleChange}
            placeholder='Last Name' />
          <input type='phone' name='firstName' placeholder='Phone' />
          <button type="submit">Submit</button>
        </form>
    )
}

interface SellerData {
  firstName: string;
  lastName: string;
  email:  string;
  phone: string;

}