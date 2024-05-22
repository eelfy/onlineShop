import cn from './Component.module.scss'

interface ComponentProps {
  some: unknown
}

export const Component = ({ some }: ComponentProps) => {
  return some
}