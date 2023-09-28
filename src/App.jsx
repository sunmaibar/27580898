import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import Title from './Title'
import items from './data'
import Navbar from './Navbar'
import Hero from './Hero'
import Location from './Location'
const allCategories = ['全部', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === '全部') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <section className='menu'>
        <Title text='菜單' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <Location />
    </main>
  )
}

export default App
