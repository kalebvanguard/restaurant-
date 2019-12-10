import React from "react";
import Menuitem from "./MenuItem"

const MenuItemList = ({ menuitems, updateMenuitem, deleteMenuitem }) => (
    <div>
     { menuitems.map( menuitem => 
        <updateMenuitem
          key={menuitem.id}
          {...menuitem}
          updateMenuitem={updateMenuitem}
          deleteMenuitem={deleteMenuitem}
        />
      )
     }
    </div>
  );

export default MenuItemList;


