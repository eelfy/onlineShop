
import classNames from "classnames"
import { InfoPageWrapper } from "../../shared/ui"

import cn from './TermsPage.module.scss'
import { TERMS } from "./TermsPage.config"

export const TermsPage = () => {
  return <InfoPageWrapper header="Условия предоставления услуг">
    <ol className={classNames(cn.ol, cn.title)}>
      {
        TERMS.map(({ title, childs }, index) => {
          return (
            <li className={cn.li} key={index}>
              <span>{title}</span>
              <ol className={classNames(cn.ol, cn.olChild)}>
                {
                  childs.map((child, indexChild) => {
                    return (
                      <li className={cn.li} key={indexChild}>{child}</li>
                    )
                  })
                }
              </ol>
            </li>
          )
        })
      }
    </ol>
  </InfoPageWrapper>
}