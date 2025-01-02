import { Pagination } from 'antd'
import './Footer.css'

export const Footer = ({ page, setPage }) => {
  const switchingPage = (page) => {
    setPage(page.toString())
  }

  return <Pagination align="center" current={page} total={50} onChange={switchingPage} />
}
