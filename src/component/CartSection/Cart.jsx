import PropTypes from 'prop-types'; 

const Cart = ({ourTitle, credit,creditRemaining,price}) => {

return (
<div className="bg-base-100 shadow-xl h-fit rounded-xl p-12 me-2">
<h2 className="text-blue-500 text-lg font-bold my-4">Credit Hour Remaining {creditRemaining} hr</h2>
<hr />
<h1 className="text-stone-900 text-xl font-bold ">Course Name</h1>
<br />
{ourTitle.map((selectedTitle,idx) =>
  <p key={idx} className="text-stone-900 text-opacity-60 text-base font-normal">• {selectedTitle}</p>
)}

<br />
<hr />
<h2 className="text-stone-900 text-opacity-80 text-base font-medium my-2">Total Credit Hour : {credit}hr</h2>

<hr />

<h3 className="text-stone-900 text-opacity-80 text-base font-semibold">Total Price : {price} USD</h3>
</div>
  )
}

Cart.propTypes = {
  ourTitle: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  creditRemaining: PropTypes.number.isRequired,
  credit: PropTypes.number.isRequired,
  
};
export default Cart
