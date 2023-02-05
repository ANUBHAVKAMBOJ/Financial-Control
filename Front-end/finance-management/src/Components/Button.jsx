import React from 'react'

export const Button = (props) => {
  let theme = {}

  if(props.com){
    theme["background-color"] = "white";
    theme["color"] = "black";
  }
  else
    theme["background-color"] = "rgb(2, 181, 53)";

  return (
    <div>
        <a className="inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500" href={props.link} style={theme}>
                {props.c}
        </a>
    </div>
  )
}

Button.defaultProps = {
  com: false,
  link: "/"
}
