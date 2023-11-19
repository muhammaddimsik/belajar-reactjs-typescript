export interface todos {
    id: number,
    todo: string,
    isDone: boolean
}

export interface Varian {
    berat: string,
    harga: string,
    id: number,
    stok: string,
    ukuran: string,
    warna: string
}

export interface Product {
    alamat_toko: string,
    deskripsi: string,
    foto1: string,
    foto2: string,
    foto3: string,
    id: number,
    id_toko: string,
    kode_alamat: string,
    kondisi: string,
    nama_produk: string,
    nama_toko: string,
    rating: number,
    update_at: string,
    value: string,
    varian?: Varian[]
}

export interface Pagination {
    current_page: number,
    last_page: number,
    next_page_url?: string,
    perpage: number,
    prev_page_url?: string,
    total: number
}