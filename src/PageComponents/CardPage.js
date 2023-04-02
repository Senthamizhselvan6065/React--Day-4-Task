import React from 'react'
import BaseApp from '../BaseApp/BaseApp'

const CardPage = () => {
    return (
        <BaseApp title="Cards">
            <div className='CardPage'>
                <div className='box-flex'>
                    <div className='dash-box-1'>
                        <h3>EARNINGS (MONTHLY)</h3>
                        <h4>$40,000</h4>
                    </div>
                    <div className='dash-box-2'>
                        <h3>EARNINGS (ANNUAL)</h3>
                        <h4>$215,000</h4>
                    </div>
                    <div className='dash-box-3'>
                        <h3>PENDING REQUESTS</h3>
                        <h4>18</h4>
                    </div>
                    <div className='dash-box-4'>
                        <h3>TASKS</h3>
                        <h4>50%</h4>
                    </div>
                </div>
                <div className='content'>
                    <div className='box-1'>
                        <h4>Default Card Example</h4>
                        <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
                    </div>
                    <div className='box-2'>
                        <h4>Basic Card Example</h4>
                        <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!</p>
                    </div>
                    <div className='box-3'>
                        <h4>Dropdown Card Example</h4>
                        <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
                    </div>
                    <div className='box-4'>
                        <h4>Collapsable Card Example</h4>
                        <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</p>
                    </div>
                </div>
            </div>
        </BaseApp>
    )
}

export default CardPage