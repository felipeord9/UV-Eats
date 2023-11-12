import Better from '../../assets/better.jpeg'
 

export default function Page404() {
  return (
    <div className=" wrapper d-flex flex-row justify-content-center align-items-center vh-100 w-100 m-auto bg-gradient">
      <div className='rounder-4'>
      <div className=' login-wrapper d-flex flex-row p-2 m-2 rounded-5 shadow' style={{backgroundColor:'white'}}>
      <img src={Better} style={{height:430}} alt=''/>
      <div >
      <center>
      <label className='' style={{fontSize:120,color:'black'}}>¡¡ERROR!!</label>
      <h2>404 - page no found</h2>
      </center>
      </div>
    </div>
    </div>
    </div>
  )
}