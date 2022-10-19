let data = [];

function addData(event) {
    event.preventDefault()

    let title = document.getElementById("input-title").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let content = document.getElementById("input-desc").value;
    let nodejs = document.getElementById("input-node").checked;
    let react = document.getElementById("input-react").checked;
    let next = document.getElementById("input-next").checked;
    let tpescrip = document.getElementById("input-tpscryp").checked;
    let image = document.getElementById("input-image").files;

    image = URL.createObjectURL(image[0]);

    let technologies = {
        nodejs, 
        react, 
        next, 
        tpescrip
    }


    let project = {
        title,
        startDate,
        endDate,
        content,
        technologies,
        image,
    }

    data.push(project)
    console.log(data)

    renderBlog()
    
}

function renderBlog() {
    for (let index = 0; index < data.length; index++) {

        document.getElementById("contents").innerHTML += `
        <div>
            <div style="flex-wrap: wrap;" class="card-project">
                <img style="border-radius: 10px 10px 0 0;
                            width: 100%;" src="${data[index].image}">
                        <div class="text-card">
                            <h3>
                                <a href="blog-detail.html" target="_blank">
                                    ${data[index].title}
                                </a>
                            </h3>
                            <div>duration: ${timeDuration(data[index].startDate, data[index].endDate)}</div>
                            <p>${data[index].content}</p>
                            <div>
                                <a ${data[index].technologies[index]}></a>
                            </div>
                            <div style="display: flex;">
                                <div class="btn-page">
                                    <a href="#">Edit</a>
                                </div>
                                <div  class="btn-page">
                                    <a href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}

function timeDuration() {

    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;

    let dateOne = new Date(startDate);
    let dateTwo = new Date(endDate);
    

    let milisecond = 1000
    let secondInHours = 3600
    let hoursInDay = 24 

    let time = Math.floor(dateTwo-dateOne);
    let durationMonth = Math.floor(time / (milisecond * secondInHours * hoursInDay * 30));
    let durationDays = Math.floor(time / (milisecond * secondInHours * hoursInDay));
    let durationHours = Math.floor(time / (milisecond * 60 * 60));
    let durationMinutes = Math.floor(time / (milisecond * 60));
    let durationSecond = Math.floor(time / milisecond);

    if (durationMonth > 0) {
        return `${durationMonth} months`
    } else if (durationDays > 0) {
        return `${durationDays} days`
    } else if (durationHours > 0) {
        return `${durationHours} hours`
    } else if (durationMinutes > 0) {
        return `${durationMinutes} minutes`
    } else {
        return `${durationSecond} seconds` 
    }
    

}