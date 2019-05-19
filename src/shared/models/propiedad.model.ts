export interface Propiedad {
  id: string;
  tipo: 'casa' | 'departamento' | 'lote' | 'chalet';
  operacion: 'venta' | 'alquiler';
  titulo: string;
  direccion: string;
  main_foto?: string;
  fotos?: string[];
  max_personas: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  wifi: boolean;
  parrilla: boolean;
  patio: boolean;
  tv: boolean;
  tvcable: boolean;
  ocean_view: boolean;
  distance_to_sea?: number;
  distance_to_center?: number;
  descripcion: string;
  createdAt: string;
  oportunidad: boolean;
  reference: string;
  mostrar: boolean;
  mts2?: number;
}
