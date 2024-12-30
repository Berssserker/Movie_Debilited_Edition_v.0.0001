import { Pagination } from 'antd'

export const Footer = ({ page, setPage }) => {
  const switchingPage = (page) => {
    setPage(page.toString())
  }

  return <Pagination align="center" current={page} total={50} onChange={switchingPage} />
}
