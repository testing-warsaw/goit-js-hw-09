function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
        const btnStart = document.querySelector("button[data-start]")
        const btnStop = document.querySelector("button[data-stop]")
        const bodyEl = document.body

        let randomColor = () => {
            getRandomHexColor();
        }

        let stopId

        const testStartClick = () => {
            bodyEl.style.backgroundColor = getRandomHexColor()
            ;
        }
        
        const testStopClick = () => {
            clearInterval(stopId);
        }
             
    btnStart.addEventListener("click", () => {
        stopId = setInterval(testStartClick, 1000)
    })

    btnStop.addEventListener("click", testStopClick)
    