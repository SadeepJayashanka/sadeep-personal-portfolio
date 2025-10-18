/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1  ' },
});

console.log(ratings);

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="">
      <div className="">{}</div>
    </div>
  );
};

ReviewCard.PropTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
