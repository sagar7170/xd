import React from 'react'
import Avatar from '@mui/material/Avatar';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
function Page2() {
    return (
        <div  style={{width:'600px'}}>

            {/* profile */}
            <div className='d-flex gap-4  '>
                <Avatar sx={{
                    width: "70px",
                    height: "70px",
                }} src="https://storage.googleapis.com/pai-images/0075b075b6584941b55a577c8e046a16.jpeg" />
                <div>
                    <h5 className='text-primary fs-5 mb-0'>Meenakshi Trivedi</h5>
                    <h5 className='fs-5 mb-0'>Pregnancy Yoga</h5>
                    <h5 className='fs-5 mb-0'>Yoga For Weight Management (package)</h5>
                    <h5 className='fs-5 mb-0'>Mode: Online</h5>
                </div>
            </div>

            <h1 className='fs-5 text-bg-info text-light mt-3 p-4 rounded-2'>Your Appointment Details</h1>

            {/* Appointment Details */}
            <div className='bg-secondary-subtle px-5 py-2 mt-3 rounded-2' >
                   
                   {/* Booking detail */}
                <div className='d-flex justify-content-between mt-2' >
                    <span className='fs-6 fw-semibold'>Booking Data : <span className='fs-6 text-primary'>24/8/2023</span></span>
                    <span className='fs-6 fw-semibold'>Booking id : <span className='fs-6 text-primary'>tnRdBda</span></span>
                </div>
                <span className='fs-6 fw-semibold'>Booking Time : <span className='fs-6 text-primary'>10.00:am</span></span>

                {/* Session Details */}
                <div className='mt-4'>
                    <h1 className='fs-5 text-primary my-3'>Session Details</h1>
                    <div className='bg-white p-3 rounded-2'>
                        <div className='d-flex justify-content-between' >
                            <span className='fs-6 fw-semibold'> Data : <span className='fs-6 fw-semibold'>24/8/2023</span></span>
                            <span className='fs-6 fw-semibold'>No of Sessions : <span className='fs-6 fw-semibold'>12/Month</span></span>
                        </div>
                        <div className='d-flex justify-content-between ' >
                            <span className='fs-6 fw-semibold'> Data : <span className='fs-6 '>24/8/2023</span></span>
                            <span className='fs-6 fw-semibold'>No of Sessions : <span className='fs-6 '>12/Month</span></span>
                        </div>
                    </div>
                </div>
           
                {/* Payment Summary */}
                <div className='mt-4'>
                   <h1 className='fs-5 text-primary my-4'>Payment Summary</h1>
                   <div className='bg-white p-3 rounded-2 pb-5'>
                        <div>
                            <h1 className='fs-6 text-secondary'>Service Consulation Charge: Rs 5000</h1>
                            <h1 className='fs-6 text-secondary'>Convenience Fee: Rs 0</h1>
                            <h1 className='fs-6 text-primary'>Total Service Consulation Charge: Rs 5000</h1>
                        </div>
                        <div className='mt-3'>
                            <h1 className='fs-6 text-secondary'>Amount Recieved:Rs 0</h1>
                            <h1 className='fs-6 text-secondary'>Payment Type :Full</h1>
                            <h1 className='fs-6 text-secondary'>Amount Yet to paid:Rs 0.00</h1>
                        </div>
                   </div>
                </div>

             {/* contact us or Need help */}
               <div className='img mt-3 mb-3 p-3 px-1 d-flex justify-content-between'>
                  <div className='d-flex'>
                   <HelpCenterOutlinedIcon sx={{color:"white",fontSize:"50px"}}/>\
                   <div>
                     <h1 className='fs-5 text-white'>Need Help?</h1>
                     <h1 className='fs-6 text-primary'>Contact us or call <h1 className='fs-6 text-white'>us on 011786767 </h1> </h1> 
                   </div>
                  </div>
                  <div className='d-flex'>
                   <ZoomInOutlinedIcon sx={{color:"white" , fontSize:"50px"}}/>\
                   <div>
                     <h1 className='fs-5 text-white'>Concellation?</h1>
                     <h1 className='fs-6 text-primary'>Check here </h1> 
                   </div>
                  </div>
                      
               </div>
            </div>

        </div>
    )
}

export default Page2