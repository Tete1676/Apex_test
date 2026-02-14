let price = 0.001;
let sold = 12000000;
let hardcap = 800;

function calculateTokens() {
    let bnb = document.getElementById("bnbAmount").value;
    if (!bnb) return;
    document.getElementById("tokenAmount").innerText =
        (bnb / price).toLocaleString();
}

function buyToken() {
    alert("Compra simulada Web3 🔥");
}

async function connectWallet() {
    if (window.ethereum) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById("walletAddress").innerText =
            "Conectado: " + accounts[0].slice(0,6) + "..." + accounts[0].slice(-4);
    } else {
        alert("Instale MetaMask");
    }
}

/* PROGRESS */
function updateProgress(){
    let percent = (sold / 100000000) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").innerText =
        sold.toLocaleString() + " tokens vendidos";
}
updateProgress();

/* COUNTDOWN */
let end = new Date("2026-03-30").getTime();
setInterval(()=>{
    let now = new Date().getTime();
    let dist = end - now;
    let d = Math.floor(dist/(1000*60*60*24));
    let h = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    let m = Math.floor((dist%(1000*60*60))/(1000*60));
    let s = Math.floor((dist%(1000*60))/1000);
    document.getElementById("countdown").innerText =
        `${d}d ${h}h ${m}m ${s}s`;
},1000);
