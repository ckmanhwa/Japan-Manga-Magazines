export type Demographic = 'Shonen' | 'Seinen' | 'Shojo' | 'Josei';
export type Publisher = 'Shueisha' | 'Kodansha' | 'Shogakukan' | 'Kadokawa' | 'Hakusensha' | 'SquareEnix' | 'AkitaShoten' | 'Others';

export interface Magazine {
  id: string;
  name: string;
  publisher: Publisher;
  demographic: Demographic;
  targetAge: string;
  description: string;
  representativeWorks: string[];
  coverUrl: string;
  logoUrl?: string;
  publicationFrequency: string;
  foundedYear: number;
  color: string;
}
