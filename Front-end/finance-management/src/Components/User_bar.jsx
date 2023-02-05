import React from 'react'
import Nav_button from './Nav_button'

function Head(){
    return (
        <div>
            <a href={'/'}>
                <button>
                    <div className='bg-slate-900 text-2xl font-semibold text-white pt-6 mb-14' style={{ "display": "flex", "flex-direction": "row", "height": "38px", "width": "250px", "border-radius": "10px"}}>
                        <div style={{ "width": "25px", "margin-top": "11px", "margin-left": "22px" }}>
                            <img src={'https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-096bc0be-043b-4588-817d-1284255ee5eb.png%3Falt%3Dmedia%26token%3D38e672b8-7fe3-4785-87b2-89aa7161dd6a'} />
                        </div>
                        <div className='ml-5 mt-2'>
                            Financial Control
                        </div>
                    </div>
                </button>
            </a>
        </div>
    )
}

function User_bar(props) {
    return (
        <div>
            <div className='bg-black' style={{"width": "280px", "height": "760px"}}>
                <div>
                    <Head/>
                    <Nav_button ilink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb_u3GxKwckvcLfzYvfMx9ipAAtx5-Mz47Q&usqp=CAU'} link={'/'} c={'Dashboard'} active={props.active[0]}/>
                    <Nav_button ilink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb_u3GxKwckvcLfzYvfMx9ipAAtx5-Mz47Q&usqp=CAU'} link={'/'} c={'Transactions'} active={props.active[1]}/>
                    <Nav_button ilink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb_u3GxKwckvcLfzYvfMx9ipAAtx5-Mz47Q&usqp=CAU'} link={'/'} c={'Add transactions'} active={props.active[2]}/>
                    <Nav_button ilink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb_u3GxKwckvcLfzYvfMx9ipAAtx5-Mz47Q&usqp=CAU'} link={'/'} c={'Goals'} active={props.active[3]}/>
                </div>
                <div className='mt-96 pt-14'>
                    <Nav_button ilink={props.link} link={'/'} c={props.user_name}/>
                </div>
            </div>
        </div>
    )
}

export default User_bar