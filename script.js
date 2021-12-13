const nineTask = document.getElementById('nine');
const tenTask = document.getElementById('ten');
const elevenTask = document.getElementById('eleven');
const twelveTask = document.getElementById('twelve');
const oneTask = document.getElementById('one');
const twoTask = document.getElementById('two');
const threeTask = document.getElementById('three');
const fourTask = document.getElementById('four');
const fiveTask = document.getElementById('five');
const container = document.querySelector('.container');
const timeBlockContainer = document.querySelector('.timeblock_container');

let selectedTime, active 

//Event Listeners
timeBlockContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);

// Select Times
function selectTime(time, color){
    time.classlist.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false
    }
}

// Set colors for schedule
function setColors(e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    } 
}

//Time Click
function selectTime(e){
    resetTasks();

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'nine':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'ten':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'eleven':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'twelve':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'one':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'two':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'three':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'four':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break
        case 'five':
            activeTask(nineTask, taskColor);
            icon = '<i class="fas fa-clock></i>'
            break        
    }

}

function resetTime(){
    const allTimes = document.querySelectorAll('.time')

    allTimes.forEach((item)=>{
        item.className = 'task_name';
    })
}