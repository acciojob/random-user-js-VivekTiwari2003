//your code here
document.getElementById("getUser").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            const photo = user.picture.large;
            const age = user.dob.age;
            const email = user.email;
            const phone = user.phone;

            document.querySelector(".user-photo").src = photo;
            document.querySelector(".user-name").textContent = name;
            document.querySelector(".info-age").textContent = `Age: ${age}`;
            document.querySelector(".info-email").textContent = `Email: ${email}`;
            document.querySelector(".info-phone").textContent = `Phone: ${phone}`;

            // document.querySelector(".additional-info").style.display = "none";
        })
        .catch((error) => console.error("Error fetching random user:", error));
});

document.querySelectorAll("button[data-attr]").forEach((button) => {
    button.addEventListener("click", () => {
        const dataType = button.getAttribute("data-attr");
        const infoElement = document.querySelector(`.info-${dataType}`);

        // Hide all additional info sections
        document.querySelectorAll(".additional-info p").forEach((element) => {
            if (element !== infoElement) {
                element.style.display = "none";
            }
        });

        // Display the selected additional info
        if (infoElement) {
            infoElement.style.display = "block";
        }
    });
});
