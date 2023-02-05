import React from 'react'
import { Button } from './Button'

function Head(props) {
  return (
    <div>
        
        <div style={{"height": "164px", "background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToM2pvXdlUwYHwFmnW0g7hV6-eMC5rvlVO-Q&usqp=CAU)", "display": "flex", "flex-direction": "row"}}>

            <div style={{"padding-top": "33px", "padding-left": "44px", "margin-right": "-366px"}}>
                <h1 className='font-sans' style={{"font-size": "45px", "font-weight": "700", "color": "white"}}>{props.title}</h1>
                <p className='text-base' style={{"color": "rgb(179, 179, 179)", "margin-top": "-5px"}}>{props.content}</p>
            </div>

            <div style={{"margin-left": "913px", "margin-top": "57px"}}>
                <Button c={props.bcontent} link={props.blink}/>
            </div>

        </div>

    </div>
  )
}

export default Head