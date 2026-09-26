// Mobile menu
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}


// Load department information
async function loadDepartment() {

    try {

        const response = await fetch("/api/department");

        const data = await response.json();

        document.getElementById("studentCount").textContent =
            data.students + "+";

        document.getElementById("facultyCount").textContent =
            data.faculty + "+";

    } catch (error) {

        console.error("Unable to load department data:", error);

    }
}


// Contact form
document
    .getElementById("contactForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        const result =
            document.getElementById("formMessage");

        try {

            const response = await fetch("/api/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    message
                })

            });

            const data = await response.json();

            result.textContent = data.message;

            if (data.success) {

                result.style.color = "green";

                document
                    .getElementById("contactForm")
                    .reset();

            } else {

                result.style.color = "red";

            }

        } catch (error) {

            result.textContent =
                "Unable to send message.";

            result.style.color = "red";

        }

    });


// Load data when page opens
loadDepartment();