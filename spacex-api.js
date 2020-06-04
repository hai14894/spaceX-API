let flight_number = prompt("what flight number you are looking for?")
let spaceXUrl = `https://api.spacexdata.com/v3/launches/${flight_number}`
axios.get(`${spaceXUrl}`)
.then(launch =>{
    if(launch.data.launch_success){
        console.log("The launch succeed")
    }else{
        console.log("The launch failed");
    }
})
.catch(err =>{
    err = "There is no such lauch"
    console.log(err);
})


