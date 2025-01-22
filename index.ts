// 1
// dati primitivi: boolean, string, number, null, undefined, any

// 2
let myName: string = "Chiara"
let myAge: number = 27
let studyingTS: boolean = true

// 3 
const greet = (name: string): string => {
    return "Ciao " + name;
  };

// 4 
const sum = (a: number, b: number): number => {
    return a + b;
  };

// 5 
const calculatePrice = (price: number, iva: number = 0.22): number => {
    const finalPrice = price + (price * iva);
    return finalPrice;
  };
  const addIVA = calculatePrice(100); 
  console.log(addIVA);

// 6
const uniteString = (stringa1: string, stringa2: string): number => {
    const result = stringa1 + stringa2;
    return result.length;
  };  
  console.log(uniteString("Ciao", "Papera"));

// 7 
// un Type Union è una variabile a cui possiamo assegnare diversi tipi di dato.
let typeUnion: string | number = "Chiara"
let typeUnion1: string | number = 27  

// 8 
let variable: number | null | undefined;

//9
type weekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

// 10
const numbers: Array<number> = [1, 2, 3];
const numbers1: number[] = [1, 2, 3];

// 11
const tuple: [string, string, string, number, number] = ["a", "b", "c", 1, 2];

// 12
// type si usa per definire tipi di dato personalizzati
// interface è un tipo di dato specifico per un oggetto

// 13 
interface Object {
    firstName: string
    lastName: string
    age: number
}

// 14 
interface User {
    email: string
    phone?: number
}

// 15 
interface Studente {
    nome: string;
    voto: number;
  }
  
  const students: Studente[] = [
    { nome: "Chiara", voto: 28 },
    { nome: "Francesca", voto: 30 },
    { nome: "Federico", voto: 25 },
  ]

//16
interface Veicolo {
    brand: string;
    model: string;
    year: number;
  }
  interface Auto extends Veicolo {
    doors: number;
    fuel: string;
  }
// 17 
const myCar: Auto = {
    brand: "Fiat",
    model: "Punto",
    year: 2021,
    doors: 5,
    fuel: "Benzina"
  };
  
  console.log(myCar);  

 // 18 
 // i Generics sono dei tipi passati come argomento per un'interfaccia. rendono l'interfaccia riutilizzabile
 
 // 19
 // si, è possibile

 // 20
 interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string; 
  }

 const responseString: ApiResponse<string> = {
    success: true,
    data: "Finale buono :)"
  };
  
  console.log(responseString);