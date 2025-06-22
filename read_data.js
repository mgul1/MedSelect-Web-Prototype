let i = 0;
let lines;

/* fetch data from med_info.txt */
fetch("med_info.txt")
.then(response => response.text())

/* read and display content on load */
.then(data => {
    lines = data.toString().split("\n");
    console.log(lines);

    if (i < lines.length) {
        const med = lines[i].split(",");
        document.getElementById("med_name").innerText = med[0];
        document.getElementById("med_type").innerHTML = "Type: " + med[1];
        document.getElementById("med_man").innerHTML = "Manufacturer: " + med[2];
        document.getElementById("med_ingredients").innerHTML = med[3];
        document.getElementById("med_class").innerHTML = med[4];
    }
})

/* if error */
.catch(error => {
    console.error("Error fetching file: ", error);
});

/* modify info on click of next */
document.getElementById("med_next").addEventListener("click", () => {
    if (i < lines.length - 1) {
        i++;
        const med = lines[i].split(",");
        document.getElementById("med_name").innerText = med[0];
        document.getElementById("med_type").innerHTML = "Type: " + med[1];
        document.getElementById("med_man").innerHTML = "Manufacturer: " + med[2];
        document.getElementById("med_ingredients").innerHTML = med[3];
        document.getElementById("med_class").innerHTML = med[4];

        /* modify prev button color */
        document.getElementById("med_prev").style.backgroundColor = "#C3E0E5";
        document.getElementById("med_prev").style.color = "black";
        document.getElementById("med_prev").style.borderColor = "#C3E0E5";
        
        /* modify next button color */
        if (i == lines.length - 1) {
            document.getElementById("med_next").style.backgroundColor = "#E9EAEC";
            document.getElementById("med_next").style.color = "#bec0c4";
            document.getElementById("med_next").style.borderColor = "#E9EAEC";
        }
    } 
    else {
        console.log("End of text");
    }
});

/* modify info on click of prev */
document.getElementById("med_prev").addEventListener("click", () => {
    if (i > 0) {
        i--;
        const med = lines[i].split(",");
        document.getElementById("med_name").innerText = med[0];
        document.getElementById("med_type").innerHTML = "Type: " + med[1];
        document.getElementById("med_man").innerHTML = "Manufacturer: " + med[2];
        document.getElementById("med_ingredients").innerHTML = med[3];
        document.getElementById("med_class").innerHTML = med[4];

        /* modify next button color */
        document.getElementById("med_next").style.backgroundColor = "#C3E0E5";
        document.getElementById("med_next").style.color = "black";
        document.getElementById("med_next").style.borderColor = "#C3E0E5";
        
        /* modify prev button color */
        if (i == 0) {
            document.getElementById("med_prev").style.backgroundColor = "#E9EAEC";
            document.getElementById("med_prev").style.color = "#bec0c4";
            document.getElementById("med_prev").style.borderColor = "#E9EAEC";
        }
    } 
    else {
        console.log("End of text");
    }
});