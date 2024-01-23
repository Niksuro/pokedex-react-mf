'use client'
import CatalogContainer from '../CatalogContainer/CatalogContainer'
import Header from '../Header/Header'
import { MainContainer } from './DashboardContainer.style'

const DashboardContainer = () => {
  return (
    <MainContainer>
      <Header />
      <CatalogContainer />
    </MainContainer>
  )
}

export default DashboardContainer
