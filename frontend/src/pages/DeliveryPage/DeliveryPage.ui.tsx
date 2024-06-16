import { InfoPageList, InfoPageWrapper } from "../../shared/ui";
import { DELIVERY_ITEMS } from "./DeliveryPage.config";

export const DeliveryPage = () => {
  return <InfoPageWrapper header="Доставка и оплата">
    <InfoPageList items={DELIVERY_ITEMS} />
  </InfoPageWrapper>
}