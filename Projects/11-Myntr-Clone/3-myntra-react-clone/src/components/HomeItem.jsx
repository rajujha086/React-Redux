import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="Item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs. {item.current_price}</span>
        <span className="original-price">Rs. {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag" onClick={handleAddToBag}>
        Add to Bag
      </button> */}

      {elementFound ? (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleRemove}
        >
          <GrAddCircle /> Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleAddToBag}
        >
          <AiFillDelete /> Remove Item
        </button>
      )}
    </div>
  );
};

export default HomeItem;
