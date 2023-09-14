// import  from 
import { FaBookOpen } from 'react-icons/fa';

const Card = ({card}) => {
    const {title,image,description,price,credit} = card;
  return (
<>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-8 pt-10">
    <img src={image} alt="Thumbnail" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-justify text-stone-900 text-opacity-60 mb-2'>{description}</p>
{/* price & credit section */}
<div className="flex justify-between w-full text-stone-900 text-opacity-60 text-base font-medium mb-1">
    <p>$ Price: {price}</p>
    <p className='flex gap-2 items-center'><FaBookOpen /> Credit: {credit}hr</p>
</div>
    <div className="card-actions">
      <button className="btn btn-wide bg-blue-500 rounded-lg text-white hover:text-black">Select</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card;
