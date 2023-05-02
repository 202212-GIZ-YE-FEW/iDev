const convertFirebaseTimestamp = (time) => {
    const fireBaseTime = new Date(
        time.seconds * 1000 + time.nanoseconds / 1000000
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();
    return [date, ", ", atTime];
};
export default convertFirebaseTimestamp;
