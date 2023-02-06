import React, { useState, useEffect} from "react";
import HasilPencarian from "./HasilPencarian";

const Mobile = () => {
    const [listCar, setListCar] = useState([]);

    function getHasilMobil() {
        const requestOptions = {
            method: 'GET',
            headers: {
                access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTYxNjQ1NH0.yn8Rjv7zXbEEy1PUCZcrQZncPJxQiBx1Za63TrTFqUg"
            }
        };

        try {
            fetch ("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?name=innova&page=1&pageSize=10", requestOptions)
            .then(resp => resp.json())
            .then((data) => {
                console.log("Hasil ", data);
                setListCar(data.cars);
            });
        } catch (error) {
            console.log("Error : " + error.message);
        }
    }

    useEffect(() => {
        getHasilMobil();
    },[] )

    return (
        <>
        <div id="hp">
        <HasilPencarian
            hpcomponen={listCar}
        />
        </div>
        </>
        );
}

export default Mobile;