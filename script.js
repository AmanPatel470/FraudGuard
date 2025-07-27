async function checkFraud() {
  const jobText = document.getElementById("jobText").value;

  const response = await fetch("http://localhost:4000/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: jobText }),
  });

  const data = await response.json();
  const resultElement = document.getElementById("result");

  resultElement.innerText = data.result;

  if (data.result.toLowerCase() === "legit") {
    resultElement.style.color = "limegreen";
  } else if (data.result.toLowerCase() === "fraudulent") {
    resultElement.style.color = "crimson";
  } else {
    resultElement.style.color = "#fff";
  }
}
