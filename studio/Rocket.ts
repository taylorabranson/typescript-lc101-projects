import {Payload} from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: object[];
    astronauts: object[];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass (items: Payload[]): number {
        let totalMassKg: number = 0;
        for (let i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd (item: Payload): boolean {

    }
    
    addCargo (cargo: Cargo): boolean {

    }

    addAstronaut (astronaut: Astronaut): boolean {
        
    }

}