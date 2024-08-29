const airName = 'US Bangla Airline'
const airRoute = 'Dhaka - Sylhet'

function Air(props) {
    console.log(props)
    const {airName, airRoute} = props;
  return <div className='air'>
    <h2 className='airName'>Air Name : {airName} </h2>
    <p className='airRoute'>Air Route : {airRoute}</p>
  </div>

}

export default Air;