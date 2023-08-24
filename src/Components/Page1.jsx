import React from 'react'

function Page1() {
  return (
    <div className='p-2' style={{width:'600px'}}>
        <img className='w-100 h-75 rounded-2' src="https://m.media-amazon.com/images/I/71Fgy1odhSL._AC_UF894,1000_QL80_.jpg" alt="" />
        <div className='bg-secondary-subtle rounded-2 mt-1 '>
            <h1 className='fs-2 text-success text-center'>Hi Test,Thank You,<h1  className='fs-2 text-success text-center'>We have recieved the payment</h1></h1>
            <h1 className='fs-6 text-secondary fw-semibold p-3 pt-0'>For believing in momkidcare.com! we are happy to serve you in your motherhood journey. Your Dayment at momkidcare.com has been received, soon you will be contacted by our health advisor for the service delivery.</h1>
        </div>
    </div>
  )
}

export default Page1