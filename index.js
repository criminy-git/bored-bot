
document.getElementById("activity-btn").addEventListener("click", () => {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("activity-name").textContent =
            `Here is an idea:
             
            ${data.activity}!

             If you don't feel like a ${data.type} activity, press the button again! :)
            
             In any case, here is a cute dog picture:
        `
        })

    })
    
    document.getElementById("activity-btn").addEventListener("click", () => {
        fetch('https://dog.ceo/api/breeds/image/random')
             .then(response => response.json())
                .then(data => {
                 console.log(data)
                document.getElementById("dog-image").innerHTML = 
                `<img src="${data.message}" />`
    })
             
})







