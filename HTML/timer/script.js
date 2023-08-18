// In your script.js file

class Timer {
    constructor(hours, minutes, seconds) {
      this.totalTime = (hours * 3600) + (minutes * 60) + seconds;
      this.timeRemaining = this.totalTime;
      this.isRunning = false;
      this.timerId = null;
      this.timerElement = null;
    }
  
    startTimer() {
      if (!this.isRunning && this.timeRemaining > 0) {
        this.isRunning = true;
        this.timerId = setInterval(() => {
          this.timeRemaining--;
          if (this.timeRemaining <= 0) {
            this.stopTimer();
            this.onTimerEnd();
          }
          this.updateTimerDisplay();
        }, 1000);
      }
    }
  
    stopTimer() {
      clearInterval(this.timerId);
      this.isRunning = false;
    }
  
    updateTimerDisplay() {
      // Update the timer display in the Active Timers Display Section
      const hoursRemaining = Math.floor(this.timeRemaining / 3600);
      const minutesRemaining = Math.floor((this.timeRemaining % 3600) / 60);
      const secondsRemaining = this.timeRemaining % 60;
  
      const timerDisplay = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
      this.timerElement.textContent = timerDisplay;
    }
  
    onTimerEnd() {
      // Handle the timer end display design (change appearance as per Figma design)
      this.timerElement.classList.add('timer-ended');
      const audio = new Audio('path_to_your_audio_file.mp3');
      audio.play();
    }
  }
  
  const activeTimers = [];
  
  function startNewTimer() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
  
    // Validate user input
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      alert('Invalid input. Please enter a valid number.');
      return;
    }
  
    const newTimer = new Timer(hours, minutes, seconds);
    activeTimers.push(newTimer);
  
    // Create a new element to display the timer
    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer');
    newTimer.timerElement = timerContainer;
  
    // Create 'Stop Timer' button and add event listener
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Timer';
    stopButton.onclick = () => {
      const index = activeTimers.indexOf(newTimer);
      if (index !== -1) {
        activeTimers.splice(index, 1);
        timerContainer.remove();
      }
      newTimer.stopTimer();
    };
  
    // Append the timer display and 'Stop Timer' button to the timer container
    timerContainer.appendChild(document.createTextNode('Timer: '));
    timerContainer.appendChild(stopButton);
    document.getElementById('activeTimersSection').appendChild(timerContainer);
  
    newTimer.startTimer();
  }
  
  // Call the startTimer function when the window has loaded
  window.onload = function() {
    // Load any previously active timers from local storage if needed
  };

  