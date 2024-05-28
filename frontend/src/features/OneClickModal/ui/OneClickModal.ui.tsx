import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import cn from './OneClickModal.module.scss'
import { StuffBlock } from '../../StuffBlock';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { noop } from '../../../shared/lib';

interface OneClickModalProps {
  isOpen: boolean
  closeModal: () => void
}

export const OneClickModal = ({ isOpen, closeModal }: OneClickModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <div className={cn.wrapper}>
        <div className={cn.form}>
          <Input label={'Имя'} value={''} onChange={noop} />
          <Input label={'Номер телефона'} value={''} onChange={noop} />
          <Input label={'E-mail'} value={''} onChange={noop} />
          <Button text='Свяжитесть со мной' onClick={noop} />
        </div>
        <div className={cn.divider} />

        <div className={cn.product}>
          <h2 className={cn.productTitle}>КУПИТЬ В 1 КЛИК</h2>
          <StuffBlock name={"name"} description={"description"} price={"price"} />
        </div>
      </div>
    </Modal>
  );
};
