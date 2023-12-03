import React from 'react'
import { FilterSection, Header } from '../components'

const Menu = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Header />
        <FilterSection />
      </div>
  )
}

export default Menu