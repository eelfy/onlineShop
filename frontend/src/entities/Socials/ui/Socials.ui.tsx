import classNames from 'classnames'
import { Icon, IconName } from '../../../shared/ui'
import cn from './Socials.module.scss'
import { Routes } from '../../../shared/routes'

interface SocialsProps {
  isBlack?: boolean
  notRenderInst?: boolean
  productArticle?: string
  productActiveSize?: string
}

export const Socials = ({ isBlack, notRenderInst, productArticle, productActiveSize }: SocialsProps) => {
  const iconSize = 30;

  const whatsappTextParam = productArticle ? `?text=${getWhatsappText(productArticle, productActiveSize)}` : '';
  const telegramTextParam = productArticle ? `?text=${getTelegramText(productArticle, productActiveSize)}` : '';

  return <div className={classNames(cn.icons, isBlack && cn.invert)}>
    <a href={`https://wa.me/79661113322${whatsappTextParam}`}>
      <Icon size={iconSize} name={IconName.Whatsapp} />
    </a>

    {!notRenderInst && <a href='https://www.instagram.com/ramster_shop'>
      <Icon size={iconSize} name={IconName.Insta} />
    </a>}

    <a href={`https://t.me/Ramster95${telegramTextParam}`}> <Icon size={iconSize} name={IconName.Telegram} /></a>
  </div>
}

function getTelegramText(productArticle: string, productActiveSize?: string) {
  const url = getProductUrl(productArticle);
  const sizeText = productActiveSize ? ` Desired size: ${productActiveSize}.` : '';
  return `Hi! Product: ${url}.${sizeText} Need info about exact price, availability and delivery time`
}

function getWhatsappText(productArticle: string, productActiveSize?: string) {
  const url = getProductUrl(productArticle);
  const sizeText = productActiveSize ? `, в размере ${productActiveSize}` : '';
  return `Добрый день! Меня заинтересовала эта модель: ${url}${sizeText}. Можете сориентировать по цене, наличию и срокам доставки?`
}

function getProductUrl(productArticle: string) {
  const doubleEncode = true;

  const encodedArticle = encodeURI(productArticle);
  const possiblyDoubleEncoded = doubleEncode ? encodeURI(encodedArticle) : encodedArticle;
  const url = `${window.location.origin}${Routes.Product}/${possiblyDoubleEncoded}`
  return url;
}
