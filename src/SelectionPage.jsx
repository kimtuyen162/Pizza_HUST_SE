import React from 'react'
// import Header from './Header'
// import Checkout from './Checkout'
// import comp from './menu.module.css'
import MenuLayout from './components/MenuLayout'
import TabItem from './components/TabItem'


const Menu = () => {
  return (
    <MenuLayout>
      <TabItem/>
    </MenuLayout>
      // <div className={comp.root}>
      //   <div className={comp.sep}>
      //     <div className={comp.left}>
      //       <div className={comp.TopRight}>
      //         <Header/>
              
      //       </div>
      //       <div>Hello</div>
      //     </div>
      //     <div className={comp.right}>
      //       <Checkout/>
      //     </div>
      //   </div>
      // </div>
    )
}

export default Menu
