const schedule = {
  "Monday 9am": "Ms. Maya",
  "Monday 11am": "Mrs. Smitha",
  "Monday 2pm": "Mr. Jay",
  "Monday 4pm": "Dr. Thomson",
  "Tuesday 11am": "Dr. Thomson",
  "Wednesday 9am": "Dr. John",
  "Wednesday 11am": "Dr. Meghna",
  "Wednesday 4pm": "Dr. Meghna",
  "Thursday 2pm": "Dr. John",
  "Friday 9am": "Mr. Jaydev",
  "Friday 2pm": "Mrs. Smitha",
  "Friday 4pm": "Dr. John"
};

function generateSchedule() {
  const subject = document.getElementById("subject").value;
  const hours = document.getElementById("hours").value;
  const faculty = document.getElementById("faculty").value;
  const time = document.getElementById("time").value;
  const resultDiv = document.getElementById("result");

  let conflict = false;
  if (schedule[time] && schedule[time] === faculty) {
    conflict = true;
  } else if (Object.keys(schedule).includes(time)) {
    conflict = true;
  }

  if (!conflict) {
    resultDiv.className = "result no-conflict";
    resultDiv.innerHTML = `<strong>Generated Schedule</strong><br>Subject: ${subject}<br>Faculty: ${faculty}<br>Time: ${time}<br><span>No Conflicts</span>`;
  } else {
    resultDiv.className = "result conflict";
    let reason = schedule[time] === faculty ? `${faculty} is already booked!` : `No slots!`;
    resultDiv.innerHTML = `<strong>Generated Schedule</strong><br>Subject: ${subject}<br>Faculty: ${faculty}<br>Time: ${time}<br><span>Conflicts Detected: ${reason}</span>`;
  }
}
