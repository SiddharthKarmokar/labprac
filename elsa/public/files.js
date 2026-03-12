async function loadFiles(){
    const res = await fetch("/files");
    const data = await res.json();

    const container = document.getElementById("file-container");

    data.forEach(fileDoc => {

        const file = fileDoc.file;

        const box = document.createElement("div");
        box.className = "file-box";

        box.innerHTML = `
            <h3>${file.originalname}</h3>
            <p>User: ${fileDoc.email}</p>
            <p>Size: ${file.size} bytes</p>
            <a href="/${file.path}" target="_blank">Download</a>
        `;

        container.appendChild(box);
    });
}

loadFiles();