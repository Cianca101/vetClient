$(document).ready(async () => {
    const data = await fetch('http://localhost:8000/api/owners/', {
        headers: {
            Authorization: "Token 65er71ve5eE5r2V7e5verV",
        }
    })
    const json = await data.json()
    console.log(data, json)
});
