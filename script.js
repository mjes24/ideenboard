function ideeSpeichern() {
  const name = document.getElementById("name").value;
  const idee = document.getElementById("idee").value;

  if (name && idee) {
    localStorage.setItem(name, idee);
    document.getElementById("meldung").innerText = "Danke! Ihre Idee wurde gespeichert.";
  } else {
    document.getElementById("meldung").innerText = "Bitte alle Felder ausfüllen.";
  }
}
