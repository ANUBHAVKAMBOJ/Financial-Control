import React from 'react'

function Nav_button(props) {
    let st = 'bg-black text-slate-400 hover:text-white';
    if(props.active)
        st = 'bg-slate-800 text-white font-semibold'
    
  return (
    <div>
        <a href={props.link}>
            <button>
                <div className={st} style={{"display": "flex", "flex-direction": "row", "height": "38px", "width": "250px", "border-radius": "10px"}}>
                    <div style={{"width": "16px", "margin-top": "11px", "margin-left": "22px"}}>
                        <img src={props.ilink}/>
                    </div>
                    <div style={{"margin-left": "20px", "margin-top": "6px"}}>
                        {props.c}
                    </div>
                </div>
            </button>
        </a>
    </div>
  )
}

export default Nav_button