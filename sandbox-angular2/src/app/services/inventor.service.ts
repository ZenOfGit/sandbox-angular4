import { Injectable } from '@angular/core';
import { IInventor } from '../interfaces/inventor';

@Injectable()

export class InventorService {
    getInventors(): IInventor[] {
        return [
            { code: 'inv101', firstName: 'Leonardo', lastName: 'da Vinci', gender: 'Male', knownFor: 'Renaissance', dateOfBirth: '4/15/1452' },
            { code: 'inv102', firstName: 'Henry', lastName: 'Ford', gender: 'Male', knownFor: 'Ford Motor Company', dateOfBirth: '7/30/1863' },
            { code: 'inv103', firstName: 'Nikola', lastName: 'Tesla', gender: 'Male', knownFor: 'Alternating Current', dateOfBirth: '7/10/1856' },
            { code: 'inv104', firstName: 'Hedy', lastName: 'Lamarr', gender: 'Female', knownFor: 'Frequency-Hopping Spread Spectrum', dateOfBirth: '11/9/1914' },
            { code: 'inv105', firstName: 'Louis', lastName: 'Pasteur', gender: 'Male', knownFor: 'Vaccines and Pasteurization', dateOfBirth: '11/27/1822' },
            { code: 'inv106', firstName: 'Stephanie', lastName: 'Kwolek', gender: 'Female', knownFor: 'Kevlar', dateOfBirth: '6/31/1923' },
            { code: 'inv107', firstName: 'Charles', lastName: 'Babbage', gender: 'Male', knownFor: 'Digital Computers', dateOfBirth: '12/26/1971' },
            { code: 'inv108', firstName: 'Benjamin', lastName: 'Franklin', gender: 'Male', knownFor: 'America, Kite and Key, Bifocals, etc.', dateOfBirth: '1/17/1706' }
        ];
    }
}