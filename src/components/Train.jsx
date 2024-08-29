const trainName = 'BENAPOLE EXPRESS'
const trainRoute = 'Dhaka - Benapole'

function Train() {
  return <div className='train'>
    <h2 className='trainName'>Train Name : {trainName} </h2>
    <p className='trainRoute'>Train Route : {trainRoute}</p>
  </div>

}

export default Train;