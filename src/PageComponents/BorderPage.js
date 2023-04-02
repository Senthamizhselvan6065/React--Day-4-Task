import React from 'react'
import BaseApp from '../BaseApp/BaseApp'

const BorderPage = () => {
    return (
        <BaseApp title="Border Utilities">
            <div className='BorderPage'>
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                <div className='content'>
                    <div className='border-box-1'>
                        <h3>.border-left-primary</h3>
                    </div>
                    <div className='border-box-2'>
                        <h3>.border-left-secondary</h3>
                    </div>
                    <div className='border-box-3'>
                        <h3>.border-left-success</h3>
                    </div>
                    <div className='border-box-4'>
                        <h3>.border-left-info</h3>
                    </div>
                    <div className='border-box-5'>
                        <h3>.border-left-warning</h3>
                    </div>
                    <div className='border-box-6'>
                        <h3>.border-left-danger</h3>
                    </div>
                    <div className='border-box-7'>
                        <h3>.border-left-dark</h3>
                    </div>
                    <div className='border-box-8'>
                        <h3>.border-bottom-primary</h3>
                    </div>
                    <div className='border-box-9'>
                        <h3>.border-bottom-secondary</h3>
                    </div>
                    <div className='border-box-10'>
                        <h3>.border-bottom-success</h3>
                    </div>
                    <div className='border-box-11'>
                        <h3>.border-bottom-info</h3>
                    </div>
                    <div className='border-box-12'>
                        <h3>.border-bottom-warning</h3>
                    </div>
                    <div className='border-box-13'>
                        <h3>.border-bottom-danger</h3>
                    </div>
                    <div className='border-box-14'>
                        <h3>.border-bottom-dark</h3>
                    </div>
                </div>
            </div>
        </BaseApp>
    )
}

export default BorderPage