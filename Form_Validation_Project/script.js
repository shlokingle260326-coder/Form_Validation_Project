
function ValidateForm() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("floatingInputGroup1").value.trim();
  const password = document.getElementById("floatingPassword").value.trim();
  const city = document.querySelector("select[name='City']").value;
  const gender = document.querySelector("input[name='gender']:checked");
  const msg = document.getElementById("formMsg");

  if (!fname || !lname || !email || !password || !city || !gender) {
    msg.innerText = "❌ Please fill the form!";
    msg.className = "mt-3 text-center text-danger fw-semibold";
    return false; // stop submit
  }

  msg.innerText = "✅ Sign-up successful!";
  msg.className = "mt-3 text-center text-success fw-semibold";

  return false; // stop page refresh (remove later if backend exists)
}

