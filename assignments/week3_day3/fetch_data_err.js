// Write an async/await function that simulates fetching data. Handle errors if the data cannot be retrieved.

const SimulateData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Can't fetch data"));
        }, 2000);
    });
};

async function getData() {
    try {
        const data = await SimulateData();
        console.log(data);
    } catch (error) {
        console.log("Server Error: ", error.message);
    }
}
    
getData();
