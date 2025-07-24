const CounterEnabled = true;
    const targetDateConfig = {
      year: 2025,
      month: 8,
      day: 22,
      hour: 12,
      minute: 0,
      second: 0
    };
    const targetDate = new Date(
      targetDateConfig.year,
      targetDateConfig.day,
      targetDateConfig.hour,
      targetDateConfig.minute,
      targetDateConfig.second
    );
    if (CounterEnabled) {
      setInterval(updateCountdown, 10);
      updateCountdown();
    } else {
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('disabled-message').style.display = 'block';
      document.getElementById('days-number').textContent = 0;
      document.getElementById('hours-number').textContent = 0;
      document.getElementById('minutes-number').textContent = 0;
      document.getElementById('seconds-number').textContent = 0;
      document.getElementById('milliseconds-number').textContent = 0;
    }
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('zero-message').style.display = 'block';
        document.getElementById('days-number').textContent = 0;
        document.getElementById('hours-number').textContent = 0;
        document.getElementById('minutes-number').textContent = 0;
        document.getElementById('seconds-number').textContent = 0;
        document.getElementById('milliseconds-number').textContent = 0;
        return;
      }
      const totalMilliseconds = Math.floor(diff);
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const days = totalDays % 30;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;
      const milliseconds = totalMilliseconds % 1000;
      document.getElementById('days-number').textContent = days;
      document.getElementById('hours-number').textContent = hours;
      document.getElementById('minutes-number').textContent = minutes;
      document.getElementById('seconds-number').textContent = seconds;
      document.getElementById('milliseconds-number').textContent = milliseconds.toString().padStart(3, '0');
    }
    document.querySelector('.background').addEventListener('click', function(e) {
      const circle = document.createElement('div');
      circle.style.position = 'absolute';
      circle.style.left = `${e.clientX - 10}px`;
      circle.style.top = `${e.clientY - 10}px`;
      circle.style.width = '20px';
      circle.style.height = '20px';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = 'white';
      circle.style.opacity = '1';
      circle.style.transition = 'opacity 0.5s';
      circle.style.pointerEvents = 'none';
      this.appendChild(circle);
      setTimeout(() => {
        circle.style.opacity = '0';
      }, 10);
      setTimeout(() => {
        circle.remove();
      }, 510);
    });
