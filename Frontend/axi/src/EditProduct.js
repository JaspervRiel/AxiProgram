import {useLocation} from 'react-router-dom';

 function ComponentB() {

    const location = useLocation();
    console.log(location.state);

        return (

            <>

            <div>{location.state.Id}</div>

            </>
        )
    }

export default ComponentB;