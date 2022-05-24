import Promotion from "./Promotion";

const PromotionList = ({
  promotions
}) => {
  return (
    <div className="promotion-list-app">
      {promotions.length > 0 && promotions.map((promotion, idx) => (
        <Promotion key={idx} promotion={promotion} index={idx} isDate={true}/>
      ))}
    </div>
  )
}

export default PromotionList;