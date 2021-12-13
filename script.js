let selectedTime, active 



// Select Time

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

function resetTasks(){
    const allTimes = document.querySelectorAll('.ta')
}