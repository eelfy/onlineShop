import Modal from "react-responsive-modal"
import { Button } from "../../shared/ui/Button"
import cn from './SuccessOrderModal.module.scss'
import { useNavigate } from "react-router-dom"
import { Routes } from "../../shared/routes"
import { CardCache, useStore } from "../../entities/Store"
import { observer } from "mobx-react-lite"

interface SuccessOrderModalProps {
  isOpen: boolean,
  closeModal: () => void
}

export const SuccessOrderModal = observer(({ isOpen, closeModal }: SuccessOrderModalProps) => {
  const { MainStore: { updateCardCount } } = useStore()

  const navigate = useNavigate()
  const onClose = () => {
    closeModal()
    CardCache.setItem([])
    updateCardCount(undefined)
    navigate(Routes.Main)
  }
  return <Modal classNames={{
    modal: cn.modalContainer
  }} open={isOpen} onClose={onClose} center showCloseIcon={false}>
    <div className={cn.content}>
      <h2 className={cn.text}>Спасибо за заказ!</h2>
      <Button text="Готово" onClick={onClose} />
    </div>
  </Modal>
})