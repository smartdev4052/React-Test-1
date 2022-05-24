import { useParams } from "react-router-dom";
import Promotion from "./Promotion";
import Table from "./Table";

const PromotionDetail = ({
  promotions
}) => {
  const { id } = useParams();
  const promo = promotions[id];
  return (
    <div className="promotion-detail-app">
      <Promotion promotion={promo} index={id} isDate={false} />
      <Table title="Drawing Schedule" data={promo.drawings} />
      <div className="promotion-entry">{promo.entry_info}</div>
      <Table
        title="Your Total Tickets Entered: 2"
        data={promo.entries}
        isSummary="All entries are locked in at the same time they are submitted and cannot be deleted."
      />
    </div>
  )
}

export default PromotionDetail;