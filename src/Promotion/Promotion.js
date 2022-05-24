import { Link } from "react-router-dom";

const Promotion = ({
  promotion,
  index,
  isDate
}) => {
  return (
    <div className="promo-app">
      <img className="promo-image" src={promotion.promo_image_url} alt="Promotion Image" />
      {isDate ?
        <div><Link className="promo-link" to={`/${index}`}>{promotion.promotion_name} ({promotion.promo_image_url})</Link></div> :
        <div className="promo-link">{promotion.promotion_name} ({promotion.promo_image_url})</div>
      }
      <div className="promo-summary">{promotion.summary}</div>
      {isDate === true &&
        <div className="promo-date">Next Drawing Date: {promotion.drawings[0].drawing_date}</div>
      }
    </div>
  )
}

export default Promotion;