import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }
    const auth =useAuth();
 

  return (
   
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" defaultValue={auth.user.name} placeholder="Name" ref={register({ required: true })} />
      {errors.name && <span className="error">Name is required</span>}
      <input name="email" defaultValue={auth.user.email} placeholder="Email" ref={register({ required: true })} />
      {errors.email && <span className="error">Email is required</span>}
      <input name="addressLine1" placeholder="AddressLine1" ref={register({ required: true })} />
      {errors.addressLine1 && <span className="error">TName is required</span>}
      <input name="addressLine2" placeholder="AddressLine2" ref={register} />
      {errors.addressLine2 && <span className="error">TName is required</span>}
      <input name="city" placeholder="City" ref={register({ required: true })} />
      {errors.city && <span className="error">TName is required</span>}
      <input name="country" placeholder="Country" ref={register({ required: true })} />
      {errors.country && <span className="error">TName is required</span>}
      <input name="zipcode" placeholder="Zip Code" ref={register({ required: true })} />
      {errors.zipcode && <span className="error">TName is required</span>}
      
      
      
      
      <input type="submit" />
    </form>
  )
};

export default Shipment;