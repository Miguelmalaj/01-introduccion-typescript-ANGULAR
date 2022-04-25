

let habilidades: string[] = ['uno', 'dos', 'tres'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'dos']
}

personaje.puebloNatal = 'Pueblo Natal';


console.table(personaje)