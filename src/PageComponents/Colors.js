import React from 'react'
import BaseApp from '../BaseApp/BaseApp'

const Colors = () => {
    return (
        <BaseApp title="Color Utilities">
            <div className='color'>
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                <div className='color-box-2'>
                    <h3>Custom Background Gradient Utilities</h3>
                    <div className='color-1'>
                        <p>.bg-gradient-primary</p>
                    </div>
                    <div className='color-2'>
                        <p>.bg-gradient-secondary</p>
                    </div>
                    <div className='color-3'>
                        <p>.bg-gradient-success</p>
                    </div>
                    <div className='color-4'>
                        <p>.bg-gradient-info</p>
                    </div>
                    <div className='color-5'>
                        <p>.bg-gradient-danger</p>
                    </div>
                    <div className='color-6'>
                        <p>.bg-gradient-dark</p>
                    </div>
                </div>
            </div>
        </BaseApp>
    )
}

export default Colors