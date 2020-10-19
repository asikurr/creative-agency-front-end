import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTable, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import './sidebar-syle.css'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {

    const { allLogin } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = allLogin;
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://arcane-sierra-56056.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({email : loggedInUser.email})
      })
      .then(res => res.json())
          .then(data => setIsAdmin(data))
    }, [])

    console.log(loggedInUser.email)

    return (
        <div className="col-md-3">
           
            <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>

                <ul className="list-unstyled">
                    {
                        isAdmin ? 
                     <div>
                            <li className="mb-3">
                                <Link to="/allServiceList" >
                                    <FontAwesomeIcon icon={faTasks} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/addservice" >
                                    <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/makeAdmin" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                     </div> :

                     <div>
                                <li className="mb-3">
                                    <Link to="/addOrder" >
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/serviceList" >
                                        <FontAwesomeIcon icon={faServicestack} /> <span>Service List</span>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/addReview" >
                                        <FontAwesomeIcon icon={faTable} /> <span>Add Review</span>
                                    </Link>
                                </li>
                     </div>
                    }

                    

                </ul>

            </div>
        </div>
    );
};

export default Sidebar;