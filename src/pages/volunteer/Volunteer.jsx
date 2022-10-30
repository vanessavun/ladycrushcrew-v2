import React from 'react'
import { useForm } from 'react-hook-form'
import './volunteer-styles.css'

function Volunteer() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <div className='volunteer-container'>
        <div><h1>Get Involved 🥰</h1></div>
        <div>
          <h2>Lady Crush Crew Ambassador Team</h2>
          <div>
            <ul>
              <li>Are you interested in being a part of the empowerment behind LADY CRVSH CREW? Do you want to make an impact in your local climbing community? If the answer is yes, then becoming a LCC Ambassador might be for you!</li>
              <li>LADY CRVSH CREW is a volunteer-based organization. Our ambassadors play an important role in bringing the community together so we can serve our mission to empower women, non-binary friends, and allies through climbing. We require quarterly commitments.
              </li>
              <li>
                Submit your information below and let us know why you want to be an ambassador!
              </li>
            </ul>
          </div>
          <div className='card-form-container'>
            <div className='card'>
              <form onSubmit={handleSubmit(onSubmit)} className='card-form'>
                <div className='input'>
                  <input type="text" placeholder="" {...register("First name", { required: true, maxLength: 80 })} className='input-field' />
                  <label className='input-label'>First name</label>
                </div>
                <div className='input'>
                  <input type="text" placeholder="" {...register("Last name", { required: true, maxLength: 100 })} className='input-field' />
                  <label className='input-label'>Last name</label>
                </div>
                <div className='input'>
                  <input type="text" placeholder="" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className='input-field' />
                  <label className='input-label'>Email</label>
                </div>
                <div className='input'>
                  <input type="text" placeholder="" {...register} className='input-field' />
                  <label className='input-label'>City/State/Country</label>
                </div>
                <div className='input'>
                  <input type="text" placeholder="" {...register} className='input-field' />
                  <label className='input-label'>Home Gym</label>
                </div>
                <div className='input'>
                  <input type="text" placeholder="" {...register} className='input-field' />
                  <label className='input-label'>Social Media Account(s)</label>
                </div>
                <div className='input'>
                  <input type="textarea" placeholder="" {...register} className='input-field' />
                  <label className='input-label'>Why do you want to be a LADY CRVSH CREW ambassador?</label>
                </div>
                <div className='action'>
                  <button type="submit" className='action-button'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Volunteer