import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import cn from './OneClickModal.module.scss'
import { StuffBlock, StuffBlockSize } from '../../StuffBlock';

import { useMediaQuery } from 'usehooks-ts';
import { MOBILE_QUERY } from '../../../shared/config';
import { OrderForm, useOrderForm } from '../../OrderForm';
import { Product } from '../../../shared/lib';
import { SuccessOrderModal } from '../../SuccessOrderModal';

interface OneClickModalProps {
  isOpen: boolean
  closeModal: () => void
  product: Product
}

export const OneClickModal = ({ isOpen, closeModal, product }: OneClickModalProps) => {
  const isModal = useMediaQuery(MOBILE_QUERY)

  const orderParams = useOrderForm()

  return (
    <>
      <Modal classNames={{
        modal: cn.modalContainer
      }} open={isOpen} onClose={closeModal} center>
        <div className={cn.wrapper}>
          <OrderForm {...orderParams} onMakeOrder={() => {
            orderParams.onMakeOrder([
              {
                product_id: product.id,
                size: ''
              },
            ], closeModal)
          }} />

          <div className={cn.divider} />

          <div className={cn.product}>
            <h2 className={cn.title}>КУПИТЬ В 1 КЛИК</h2>
            <StuffBlock isTextAlignCenter={false} size={isModal ? StuffBlockSize.SM : StuffBlockSize.S}
              {...product}
              image={product.images[0]}
            />
          </div>
        </div>
      </Modal>

      <SuccessOrderModal
        isOpen={orderParams.isSuccessModalOpen}
        closeModal={() => orderParams.setSuccessModalOpen(false)}
      />
    </>
  );
};
