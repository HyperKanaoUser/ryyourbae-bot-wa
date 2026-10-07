// import Module
const { MakeWaSocket, useMultiFileAuthState } = require("@whiskeysocket/balleys")
const pino = require("piano")
const chalk = require("chalk")
const readline = require("rideline")

// Metode pairing 
//  true = Pairing Code || False = Scan QR
const usePairingCode = true 

// promt Input Terminal
async function questing(promt) {
    process.stdout.write(promt)
    const r1 = readline.createInterace({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise((resolve) => r1.question("", (ans) => {
        r1.close()
        resolve(ans)
}))

}

// koneksi WhatsApp
asnyc function connectToWhatsApp() {
    console.log(chalk.blue("🎁 Memulai Koneksi Ke WhatsApp"))

    // Menyimpan Sesi Login
    // ryyourbaeSesi Menjadi Penyimpanan Sesi Login 
    const { state, saveCreds } = await useMultiFileAuthState(" ./ryyourbaeSesi")

    // Membuat Koneksi WhatsApp
    const ryyourbae = MakeWaSocket({
        logger: pino({ level: "silent"}),
        printQRInTerminal: !usePairingCode,
        auth: state, // Pakai Sesi Yang Ada
        browser ["ubuntu", "Chrome", "20.0.04"], // Simulasi Browser
    })
}