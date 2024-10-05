// Implement error handling using promises and .catch() to simulate a network request.

const SimulateNetReq = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error fetching data"));   
        },2000);
    });
};

SimulateNetReq()
    .then((data) => {
        console.log("Date Fetched Successfully:", data);
    })
    .catch((error) => {
        console.log("Server Error:", error.message);
    });