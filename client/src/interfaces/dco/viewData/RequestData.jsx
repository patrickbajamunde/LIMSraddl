import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RabiesData from './RabiesData'
import GeneralData from './GeneralData'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function RequestData() {

    const [requestData, setRequestData] = useState(null);
    const { id } = useParams()
    const location = useLocation();
    const backRoute = location.state?.from || "/Dco/Walkin/";
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8003/api/client/getClient/${id}`)
            .then((response) => {
                setRequestData(response.data)
            })
            .catch((error) => {
                console.error("Request not found", error)
                setRequestData(null)
            })
    }, [id]);

    if (!requestData) return <p>Loading....</p>

    if(requestData.type === 'RABIES') {
        return <RabiesData requestData={requestData} setRequestData={setRequestData} id = {id}/>
    } else {
        return <GeneralData requestData={requestData} setRequestData={setRequestData} id = {id}/>
    }
}

export default RequestData