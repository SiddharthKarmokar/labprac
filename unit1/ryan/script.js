document.getElementById("btn").addEventListener("click", async ()=>{
    const res = await fetch("/api/hello", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    document.getElementById("head").innerHTML = data.message;
    alert("Something changed!");
});
document.getElementById("auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    await submitAuth(e.target);
})

function getFormData(form){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return data;
}

async function submitAuth(form){
    const mode = document.querySelector('input[name="rg"]:checked').id;
    const routes = {
        "sign-in": "/login",
        "sign-up": "/register",
        "reset": "/reset"
    };
    const route = routes[mode];

    const data = getFormData(form);

    const res = await fetch(route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(data);
    console.log(result);
}
