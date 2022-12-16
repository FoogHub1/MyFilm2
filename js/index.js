let looked = document.getElementById("looked");
let nolooked = document.getElementById("nolooked");
let advise = document.getElementById("advise");
let noadvise = document.getElementById("noadvise");
let series = document.getElementById("series");
let creator = document.getElementById("creator");

function openPage(page) {
    if (page == "looked") {
        looked.style.display = "block";
        nolooked.style.display = "none";
        advise.style.display = "none";
        noadvise.style.display = "none";
        series.style.display = "none";
        creator.style.display = "none";
    }
    if (page == "nolooked") {
        looked.style.display = "none";
        nolooked.style.display = "block";
        advise.style.display = "none";
        noadvise.style.display = "none";
        series.style.display = "none";
        creator.style.display = "none";
    }
    if (page == "advise") {
        looked.style.display = "none";
        nolooked.style.display = "none";
        advise.style.display = "block";
        noadvise.style.display = "none";
        series.style.display = "none";
        creator.style.display = "none";
    }
    if (page == "noadvise") {
        looked.style.display = "none";
        nolooked.style.display = "none";
        advise.style.display = "none";
        noadvise.style.display = "block";
        series.style.display = "none";
        creator.style.display = "none";
    }
    if (page == "series") {
        looked.style.display = "none";
        nolooked.style.display = "none";
        advise.style.display = "none";
        noadvise.style.display = "none";
        series.style.display = "block";
        creator.style.display = "none";
    }
    if (page == "creator") {
        looked.style.display = "none";
        nolooked.style.display = "none";
        advise.style.display = "none";
        noadvise.style.display = "none";
        series.style.display = "none";
        creator.style.display = "block";
    }
}