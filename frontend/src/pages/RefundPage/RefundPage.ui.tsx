import { InfoPageList, InfoPageWrapper } from "../../shared/ui";
import { REFUND_ITEMS } from "./RefundPage.config";

export const RefundPage = () => {
  return <InfoPageWrapper header="Обмен и возврат">
    <InfoPageList items={REFUND_ITEMS} />
  </InfoPageWrapper>
}