import {useEffect, useState} from 'react';

function Time(){
    //state
    const [dateTime, setDateTime] = useState(new Date());

    //behavior
    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    //render
    return (
        <div id={"clock"}>{
            (dateTime.getHours() < 10 ? '0' : '') + dateTime.getHours() + ':' +
            (dateTime.getMinutes() < 10 ? '0' : '') + dateTime.getMinutes() + ':' +
            (dateTime.getSeconds() < 10 ? '0' : '') + dateTime.getSeconds()
        }</div>
    );
}

export default Time;