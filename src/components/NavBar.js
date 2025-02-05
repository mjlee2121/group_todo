import React, {useState} from 'react'
import { Link }from 'react-router-dom'

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex ] = useState(null)
  const contents=['dailytodo','weeklytodo','monthlytodo','comments', 'login','etc' ]
  
  return (
    <div>
      <div className='navStyle'>
        {contents.map((content, index)=>(
          <Link 
          key={index}
          to={`/${content}`}
          style={{
            ...style.linkStyle,
            ...(hoveredIndex === index? style.hoverStyle : {})
          }}
          onMouseEnter={()=>setHoveredIndex(index)}
          onMouseLeave={()=>setHoveredIndex(null)}
          >
            {content}
            </Link>
        ))}
      </div>
      
    </div>
  )
}

const style={
  navStyle : {
    gap:'40px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  },
  linkStyle : {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  hoverStyle : {
    '&::after': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '0%',
      height: '2px',
      backgroundColor: 'white',
      transition: 'width 0.3s ease'
    }
  }
}

export default NavBar