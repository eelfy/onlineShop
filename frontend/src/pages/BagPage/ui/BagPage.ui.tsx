import { StuffBlock, StuffBlockSize } from '../../../features/StuffBlock'
import { Button } from '../../../shared/ui/Button'
import cn from './BagPage.module.scss'
import { CardCache } from '../../../entities/Store'
import { NotFound } from '../../../entities/NotFound'
import { useMediaQuery } from 'usehooks-ts'
import { MOBILE_QUERY } from '../../../shared/config'
import { OrderForm, useOrderForm } from '../../../features/OrderForm'
import { Toaster } from 'react-hot-toast'



export const BagPage = () => {
  const cacheItems = CardCache.getItems()
  const isMobile = useMediaQuery(MOBILE_QUERY)


  const orderParams = useOrderForm()

  const {
    onMakeOrder,
    isDisabled
  } = orderParams

  if (!cacheItems?.length) return <NotFound title='Корзина пуста' />

  const totalSum = cacheItems.reduce((sum, { price }) => sum + price, 0);

  return <>
    <Toaster />

    <div className={cn.wrapper}>
      <h2 className={cn.title}>Корзина</h2>
      <div className={cn.bag}>
        <OrderForm showButton={!isMobile} {...orderParams} />

        <div className={cn.separator}></div>

        <div className={cn.lastPart}>
          <div className={cn.products}>
            {cacheItems.map((item, index, arr) => {
              return <StuffBlock
                imageId={item.image}
                name={item.brand}
                description={item.name}
                price={item.price}
                size={StuffBlockSize.L}
                stuffSize={item.size}
                key={index}
                productId={item.id}
                withDivider={arr.length !== index + 1}
              />
            })}
          </div>

          <div className={cn.info}>
            <div className={cn.field}>
              <span>Промежуточный итог</span>
              <span>от {totalSum} ₽</span>
            </div>
            <div className={cn.field}>
              <span>Доставка</span>
              <span style={{ textAlign: 'right' }} >Рассчитывается в чате с менеджером</span>
            </div>
            <div className={cn.field}>
              <span className={cn.bold}>Итого</span>
              <span className={cn.bold}>от {totalSum} ₽</span>
            </div>
          </div>

          {isMobile && <Button isDisabled={isDisabled} text='Свяжитесь со мной' onClick={onMakeOrder} />}
        </div>
      </div>
    </div>
  </>
}

