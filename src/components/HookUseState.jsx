import React, { useState } from 'react'

function HookUseState() {

    const [count, setCount] = useState(0);
    const handleOnClick = () => {
      setCount(count+1);
    }
        return (
            <div>

                <h2>Hook Use State Count value: {count} </h2>
                <button onClick={handleOnClick} > Use State Increment  </button>
            </div>

        )
    
}
export default HookUseState;