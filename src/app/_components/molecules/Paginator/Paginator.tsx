import { ICON_LEFT, ICON_RIGHT } from '@/app/_constants/constants'
import Icon from '../../atoms/Icon/Icon'
import {
  ButtonActionPaginator,
  ButtonPaginator,
  LabelPaginator,
  PaginatorContainer,
} from './Paginator.style'
import { useEffect, useState } from 'react'

interface PaginatorProps {
  page: number
  totalResults: number
  perPage: number
  setActualPage: (page: number) => void
}

const Paginator = ({
  page,
  totalResults,
  perPage,
  setActualPage,
}: PaginatorProps) => {
  /**
   * State to manage the pages to show
   */
  const [pages, setPages] = useState<number[]>([])
  /**
   * Calculate the total pages
   */
  const totalPages = Math.ceil(totalResults / perPage)
  /**
   * Set the max pages to show at time in the center
   */
  const maxViewPages = 5
  /**
   * Set the pages to show
   */
  const setPagesArray = () => {
    const pagesArray: number[] = []
    let initialPage = 1
    let finalPage = maxViewPages
    if (page > 3) {
      initialPage = page - 2
    }
    if (page > totalPages - 2 && totalPages > maxViewPages) {
      initialPage = totalPages - 4
    }
    if (totalPages <= maxViewPages) {
      finalPage = totalPages
      initialPage = 1
    }
    for (let i = initialPage; i < initialPage + finalPage; i++) {
      pagesArray.push(i)
    }
    setPages(pagesArray)
  }
  /**
   * Hook to set the pages to show when the page in parent change
   */
  useEffect(() => {
    setPagesArray()
  }, [page])

  return (
    <PaginatorContainer>
      {page !== 1 && (
        <ButtonActionPaginator
          $side="left"
          onClick={() => setActualPage(page - 1)}
        >
          <Icon icon={ICON_LEFT} />
        </ButtonActionPaginator>
      )}

      {pages[0] !== 1 && totalPages > maxViewPages && (
        <>
          <ButtonPaginator $selected={false} onClick={() => setActualPage(1)}>
            1
          </ButtonPaginator>
          <LabelPaginator>...</LabelPaginator>
        </>
      )}

      {pages.map((pageItem, index) => (
        <ButtonPaginator
          key={`page-${index}`}
          data-test="paginator-page"
          $selected={pageItem === page}
          onClick={() => setActualPage(pageItem)}
        >
          {pageItem}
        </ButtonPaginator>
      ))}

      {pages[pages.length - 1] !== totalPages && totalPages > maxViewPages && (
        <>
          <LabelPaginator>...</LabelPaginator>
          <ButtonPaginator
            $selected={false}
            onClick={() => setActualPage(totalPages)}
          >
            {totalPages}
          </ButtonPaginator>
        </>
      )}
      {page !== totalPages && (
        <ButtonActionPaginator
          $side="right"
          onClick={() => setActualPage(page + 1)}
        >
          <Icon icon={ICON_RIGHT} />
        </ButtonActionPaginator>
      )}
    </PaginatorContainer>
  )
}

export default Paginator
