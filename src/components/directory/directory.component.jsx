import React from 'react';
import './directory.style.scss';
import {createStructuredSelector} from "reselect";  
import {connect} from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections})=>(

    <div className="directory-menu">
        {
            sections.map(({id , ...otherSetionProps})=>{
              return (
                  <MenuItem key={id} {...otherSetionProps}></MenuItem>
              )   
            })
        }
    </div>
)
    


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);