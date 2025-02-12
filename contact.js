
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


const emailInput = document.querySelector("#input-email");
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    let emailerror = document.querySelector(".email-message");
    let texterror = document.querySelector(".text-message");
    let textArea = document.querySelector("textarea");
    let hasError = false;

    if(!validateEmail(emailInput.value.trim()))
    {

        emailerror.classList.add("error");
        emailerror.innerHTML = "Invalid Email!"
        hasError= true;
    }
    else
    {
        emailerror.classList.remove("error");
        emailerror.innerHTML="";
    }

    // check error in textArea

    if (textArea.value.trim() === "")
    {
        texterror.classList.add("error");
        texterror.innerHTML = "Invalid field";
        hasError = true;
    }
    else
    {
        texterror.classList.remove("error");
        texterror.innerHTML="";
    }

    if (!hasError) {
        // Create and append the toast container
        let body = document.querySelector("body");
        let div = document.createElement("div");

        div.innerHTML = `
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            We got your message!
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        `;

        body.appendChild(div);

        // Initialize and show the toast
        const toastElement = document.getElementById("liveToast");
        const toast = new bootstrap.Toast(toastElement);

        toast.show();

        // Optional: Remove the toast from the DOM after it disappears
        toastElement.addEventListener("hidden.bs.toast", () => {
            div.remove();
        });
    }


})

