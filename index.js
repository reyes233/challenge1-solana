// Import Solana web3 functinalities
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

const airDropToUserInputPublicKey = async () => {
    try
    {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const userPublicKey = process.argv[2];
        const fromAirDropSignature = await connection.requestAirdrop(
        new PublicKey(userPublicKey),
        2 * LAMPORTS_PER_SOL);
    } catch (err) {
        console.log(err);
}
};
airDropToUserInputPublicKey();