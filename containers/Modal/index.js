import React, {Component} from 'react';
import './style.css';

class Modal extends Component {
    render() {
        const style = this.props.isSign ? {display: 'block'} : null;
        return(
            <div>
                <section className='form' style={style}>
                    <div className='top'>
                    <span className="close" onClick={this.props.onCancel}>&times;</span>
                        <h1>Sign up to Insights ♥</h1>
                    </div>
                    <div className='half-d'>
                        <input type='text' placeholder='first-name' className='half' />
                        <input type='text' placeholder='last-name' className='half' />
                    </div>
                        <div className='botton-1'>
                        <div className="icon-1">
                            <span>
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        <input type="email" placeholder='E-mail' className='input-1'/>       
                    </div>       
                    <div className='botton-2'>
                        <div className="icon-2">
                            <span>
                                <i class="fa fa-unlock-alt"></i>
                            </span>
                        </div>
                        <input type="email" placeholder='Password   ' className='input-1'/>
                    </div>
                    <div className='Login-1'>
                    <button className='login'>Sign Up</button>
                    </div>     
                        <p>A member ?<a href='#' onClick={this.props.onLogin}> Login then !</a></p>
                 </section>
            </div>
        )
    }
}
export default Modal;