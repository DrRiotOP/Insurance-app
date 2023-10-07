import React, { useState, useEffect } from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './thankYou.css';

function ThankYou() {
    const [state, setstate] = useState({
        users: []
    })
    const [pack, setPack] = useState("")
    const [premium, setPremium] = useState(0);
    useEffect(() => {
        async function getData() {
            const res = await InsuranceService.getUserId(3);
            setstate({
                ...state, users: res.data
            })
        }
        async function getPack() {
            const res = await InsuranceService.getPackageLevel();
            // alert(res.data[0].UserName);
            setPack(res.data[0].PackageLevel);
        }
        getPack();
        getData();
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
        calculatePremium();
        await axios.post("http://localhost:5000/sendsms", { type: "Health", name: "Usha" });
    }
    // alert(pack);
    let { users } = state;
    let { pres } = premium;
    let level = pack;
    const calculatePremium = () => {
        let temp = 0;
        let count = 0;
        let totalPremium = 0;
        let agePremium = 0;
        users.forEach((e) => {
            let basePremium = 0;
            // alert(level);
            if (level == 'base') {
                basePremium = 5000;
            }
            else if (level == 'gold') {
                basePremium = 7500;
            }
            else {
                basePremium = 9000;
            }
            // userId=e.PackageLevel;
            // alert(userId);
            if (level == 'base') {
                agePremium = e.DependentAge * 100;
            }
            else if (level == 'gold') {
                agePremium = e.DependentAge * 150;
            }
            else {
                agePremium = e.DependentAge * 250;
            }
            if (count == 0) {

                totalPremium = basePremium + agePremium;
            }
            else {
                totalPremium = agePremium;
            }
            temp = temp + totalPremium
            count++;
            // alert(temp);

            // alert(temp);
        })
        setPremium(temp);
        InsuranceService.updatePremium(temp);
        //   alert(temp);
        // setIdentity(userId);

        // alert(premium);

        // alert(tPremium);

    };
    return (
        <>
            <div className='Home' >
                <Link to="/">
                    <button style={{backgroundColor:'grey'}} type="submit">Go To Home</button>
                </Link>
            </div>
            <div>
                <h1 className="Title"></h1>
            </div>
            <div className='premium'>
                <button onClick={onSubmit} class="thank">Click Here to Know Your Premium</button>
            </div>
            <br/>
            <div className='premium'>
                <h1>The premium is :{premium}</h1>
            </div>

        </>
    )
}

export default ThankYou
