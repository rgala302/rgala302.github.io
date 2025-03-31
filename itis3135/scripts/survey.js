document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("byoForm");
    const output = document.getElementById("output");
    const addCourseBtn = document.getElementById("addCourse");
    const coursesContainer = document.getElementById("coursesContainer");

    addCourseBtn.addEventListener("click", function () {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-entry");

        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.classList.add("course");
        courseInput.required = true;
        courseDiv.appendChild(courseInput);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";
        deleteBtn.addEventListener("click", function () {
            courseDiv.remove();
        });
        courseDiv.appendChild(deleteBtn);

        coursesContainer.appendChild(courseDiv);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const requiredFields = form.querySelectorAll("input[required]");
        for (const field of requiredFields) {
            if (!field.value.trim()) {
                alert("Please fill out all required fields.");
                return;
            }
        }

        const formData = {
            name: document.getElementById("name").value,
            mascot: document.getElementById("mascot").value,
            imageCaption: document.getElementById("imageCaption").value,
            personalBackground: document.getElementById("personalBackground").value,
            professionalBackground: document.getElementById("professionalBackground").value,
            academicBackground: document.getElementById("academicBackground").value,
            webDevBackground: document.getElementById("webDevBackground").value,
            computerPlatform: document.getElementById("computerPlatform").value,
            funnyThing: document.getElementById("funnyThing").value,
            anythingElse: document.getElementById("anythingElse").value,
            courses: Array.from(document.querySelectorAll(".course")).map((input) => input.value) // ✅ Fixed
        };

        output.innerHTML = `
            <h3>Generated Page</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Mascot:</strong> ${formData.mascot}</p>
            <p><strong>Image Caption:</strong> ${formData.imageCaption}</p>
            <p><strong>Personal Background:</strong> ${formData.personalBackground}</p>
            <p><strong>Professional Background:</strong> ${formData.professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${formData.academicBackground}</p>
            <p><strong>Background in Web Development:</strong> ${formData.webDevBackground}</p>
            <p><strong>Primary Computer Platform:</strong> ${formData.computerPlatform}</p>
            <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
            <p><strong>Anything Else:</strong> ${formData.anythingElse}</p>
            <p><strong>Courses:</strong> ${formData.courses.length ? formData.courses.join(", ") : "None"}</p>
            <button id="resetPage">Reset</button>
        `;

        document.getElementById("resetPage").addEventListener("click", function () {
            form.reset();
            output.innerHTML = "";
            form.style.display = "block";
        });

        form.style.display = "none";
    });

    form.addEventListener("reset", function () {
        output.innerHTML = "";
        form.style.display = "block";
    });
});
