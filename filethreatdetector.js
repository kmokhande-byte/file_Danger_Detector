let file = prompt("Enter file name:");

if (
  file.includes(".exe") ||
  file.includes(".bat") ||
  file.includes(".cmd") ||
  file.includes(".vbs")
) {
  alert("Harmful File");
} else {
  alert("Harmless File");
}
