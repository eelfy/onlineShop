import { StuffBlock } from "../../StuffBlock";
import { Pagination } from "../../../entities/Pagination";
import { useEffect, useRef, useState } from "react";
import { Api } from "../../../shared/api/Api";
import { Product, SortOrder } from "../../../shared/lib";
import { useBoolean, useMediaQuery } from "usehooks-ts";
import { Loader } from "../../../shared/ui";
import { MOBILE_QUERY } from "../../../shared/config";
import styles from './StuffSlider.module.scss'

export const StuffSlider = ({ cname }: { cname: string }) => {
  const isMobile = useMediaQuery(MOBILE_QUERY)

  const ref = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<Product[]>()
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean()

  const visualPaginationRequirement = 15;
  const addedElements = isMobile ? 1 : 3;

  const limit = visualPaginationRequirement + addedElements;

  useEffect(() => {
    startLoading()
    Api.getProductsInCategory({
      cname,
      limit,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then(value => {
      setProducts(value.products)
    }).finally(() => {
      stopLoading()
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, cname, limit]);

  function scrollBy(sign: 1 | -1) {
    ref.current?.scrollBy({
      left: sign * (ref.current.clientWidth / 2),
      behavior: 'smooth'
    })
  }

  function next() {
    scrollBy(1);
  }
  function previous() {
    scrollBy(-1)
  }

  const paginationTotal = products?.length ? products.length - addedElements : visualPaginationRequirement;

  const [current,setCurrent] = useState(1);

  const actualItemsPresentQuantity = products?.length ?? limit;

  function onScroll() {
    if (!ref.current) return;

    /** from 0 to 1 */
    const scrollPositionNormalized = ref.current.scrollLeft / ref.current.scrollWidth;
    const newCurrent = Math.round(scrollPositionNormalized * actualItemsPresentQuantity) + 1;
    setCurrent(newCurrent);
  }

  useEffect(() => {
    setCurrent(1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  const renderContent = () => {
    if (isLoading) return <Loader isFullSize />
    if (!products) return null

    return (
      <div className={styles.wrapper} ref={ref} onScroll={onScroll}>
        {products.map(({ images, ...other }) => <StuffBlock
          {...other}
          isStatic
          image={images[0]}
          key={other.id}/>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      {renderContent()}
      <Pagination onNext={next} onPrev={previous} current={current} total={paginationTotal} />
    </div>
  );
};
