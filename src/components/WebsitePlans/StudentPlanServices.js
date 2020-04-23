import React from 'react'

const StudentPlanServices = () => {
    return (
        <div>
            <table>
                    <tr style={{marginTop: '20px'}}>
                        <td style={{fontWeight: 'bold'}}>Services</td>
                        <td style={{fontWeight: 'bold'}}>Prices(₦)</td>
                    </tr> 
                    <hr />

                    <tr style={{marginTop: '-20px'}}>
                        <td>Home, About, Services and Contact Pages</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>5,000</td>     
                    </tr>
                    <hr />

                    <tr>
                    <td>Integration of Social Media business accounts such as facebook, twitter, linkedIn and google</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>1,000</td>
                    </tr>
                    <hr />

                    
                    <tr>
                        <td>.com domain registration</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>4,000</td>
                    </tr>
                    <hr />

                    <tr>
                        <td>.com.ng domain registration</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>1,500</td>
                    </tr>
                    <hr />

                    <tr>
                    <td><del>SEO setup</del></td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>-</td>
                    </tr>
                    <hr />

                    <tr>
                    <td><del>Analytics</del></td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>-</td>
                    </tr>
                    <hr />

                    <tr>
                    <td>Free SSL/TLS certificate</td> 
                    </tr>
                    <hr />

                    <tr>
                    <td>Free hosting for 6 months</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}></td>
                    </tr>
                    <hr />
                </table>
        </div>
    )
}

export default StudentPlanServices