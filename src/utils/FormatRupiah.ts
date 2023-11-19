export function formatRupiah(amount: number): string {
    // Memisahkan bagian desimal dan ribuan
  const intPart = Math.floor(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Menggabungkan kembali tanpa bagian desimal
  const formattedAmount = `Rp ${intPart}`;

  return formattedAmount;
  }