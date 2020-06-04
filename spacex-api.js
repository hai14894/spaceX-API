let flight_number = prompt("what flight number you are looking for?")
let spaceXUrl = "https://api.spacexdata.com/v3/launches/"
let specifyUrl = new URL(flight_number, spaceXUrl)
axios.get(`${specifyUrl}`)
.then(launch =>{
    if(launch.data.launch_success){
        console.log("The launch succeed")
    }else{
        console.log("The launch failed");
    }
})