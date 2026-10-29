export type Catalog = {
  category: string
  fileId: string
  featured?: boolean
}

export const catalogs: Catalog[] = [
  { category: 'Desinfección', fileId: '1Yv2TmR-CUmKXwPYeo9O9HFEoQQ6e50K8' },
  {
    category: 'Lavandería',
    fileId: '1ha92EV_OjSvlGEqYhmpJKEjfP5IRy32w',
    featured: true,
  },
  {
    category: 'Cocina',
    fileId: '1mVvgsV-QYnztzV87dhyev12st-a5mwbW',
    featured: true,
  },
  { category: 'Suelos y superficies', fileId: '1NTUG-V4KZocLGhdi8ySg141xV7sMleIn' },
  { category: 'Ambientación', fileId: '15izdgFPTaJ9CI1Vy9q1xpOmqvak16CYz' },
  { category: 'Higiene personal', fileId: '1wRGWN3N_FcJyw5mnQOg4C8ZtOM88wPwj' },
  {
    category: 'Toallitas impregnadas',
    fileId: '1PTdgmtttNiJXHvzydKnTqK2AbsrUbAJ3',
  },
  { category: 'Soluciones sostenibles', fileId: '1d-TLy8LQaYl6_2RRvGV1CPi52sk-fDYs' },
  { category: 'Automoción', fileId: '13HLcpSbYd8MyL64ODoR1aa9Hhn4cS8GK' },
  {
    category: 'Seguridad alimentaria',
    fileId: '1tRDJ4lIERfaZafVIWEfmcewKQomOGrTo',
    featured: true,
  },
  { category: 'Almazaras', fileId: '1UJx0M5PdGhqlvqiYS_8vdsokCK768zQG' },
  {
    category: 'Mataderos y salas de despiece',
    fileId: '1iZ7-2GbC60dyEBiEuEBWgn87VtVGpXQi',
  },
  { category: 'Queserías', fileId: '1PCewnpjy6VsaqfqRojHPtlk68A6bjqlL' },
  { category: 'Industria', fileId: '1cUSBKA1SEUpm8PvA9M_24a--TCScA-Ch' },
  { category: 'Agro industria', fileId: '1Bg1Wa1eNcegN2RintE9Rqhnjc6Ccf3HK' },
  { category: 'Construcción', fileId: '1iR02NXw9A3uErvJbntOMAz4iZLDbOFmA' },
  {
    category: 'Ambientación y otros productos químicos',
    fileId: '13YcqGz9VLRutw8qn0-cq2Dfwh4OpPjv7',
  },
  {
    category: 'Dosificadores y dispensadores',
    fileId: '11h-SChdk4KhTlptjvS8tfvbqenufhHoA',
  },
  { category: 'Menaje de limpieza', fileId: '1GF6X1__Q4ZbwpaGnqujnXlKQVmNa_XY3' },
  {
    category: 'Papel secamanos e higiénicos',
    fileId: '1v9jBqw3bDcteTNQAjoVUplsaot_gkZaQ',
  },
  {
    category: 'Manteles de papel y servilletas de celulosa',
    fileId: '1lDblEbgsOC0gJeEZTI_FzGg8Pgv81iaV',
  },
  {
    category: 'Novotex, Air soft y Spunlace',
    fileId: '1_dQ2vS4BwBy6mTfhpzQLtjJeaGrw9_O4',
  },
  {
    category: 'Conservación y transporte de alimentos',
    fileId: '12siGTeRdRc3Ozxj04pObC6iyY4OdT9z5',
  },
  {
    category: 'Bolsas de plástico y papel',
    fileId: '172VQxs_vnSR1QcRKvPU-gH_i_nWaWCrR',
  },
  { category: 'Monouso', fileId: '10tauA2Q6Jz-7F_m0RI0t9i5W8a5w2XQu' },
  { category: 'Acogida', fileId: '1r927dLCyoY0aMc8TbHYKHnCB_rjtGmJb' },
  {
    category: 'Cristalería, cubertería, vajilla y menaje doméstico',
    fileId: '1FHhYgIA0b07JgcxnkAu1NLz6EWZeiiuE',
  },
]

export function getCatalogUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view`
}
