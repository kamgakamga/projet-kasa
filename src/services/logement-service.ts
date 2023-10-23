import LOGEMENTS from "../models/mocks-logement";
import Logement from "../models/logement";

export default class PokemonService {

        static logements:Logement[] = LOGEMENTS;

        //Permet de savoir si nous somme en devellopement ou en production
        static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
      
        static getAllLogements() : Promise<Logement[]>{
                        if(this.isDev) {
                          return fetch('http://localhost:3001/logements')
                          .then(response => response.json())
                          .catch(error => this.handleError(error));
                        }
                    
                        return new Promise(resolve => {
                          resolve(this.logements);
                        });
        }

        static getLogementById(id: string) : Promise<Logement|null>{
                if(this.isDev) {
                        return fetch(`http://localhost:3001/logements/${id}`)
                        .then(response => response.json())
                        .then(data => this.isEmpty(data) ? null : data)
                        .catch(error => this.handleError(error));
                      }
                      return new Promise(resolve => { 
                        const result = this.logements.find(logement => id === logement.id);   
                        resolve(result?result:null);
                      });                 
                 } 

                 static updateLogement(logement: Logement): Promise<Logement> {
                        if(this.isDev) {
                          return fetch(`http://localhost:3001/logements/${logement.id}`, {
                            method: 'PUT',
                            body: JSON.stringify(logement),
                            headers: { 'Content-Type': 'application/json'}
                          })
                          .then(response => response.json())
                          .catch(error => this.handleError(error));
                        }
                    
                        return new Promise(resolve => {
                          const { id } = logement;
                          const index = this.logements.findIndex(logement => logement.id === id);
                          this.logements[index] = logement;
                          resolve(logement);
                        }); 
                      }
                        
  static deleteLogement(logement: Logement): Promise<{}> {
        if(this.isDev) {
          return fetch(`http://localhost:3001/logements/${logement.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .catch(error => this.handleError(error));
        }
    
        return new Promise(resolve => {    
          const { id } = logement;
          this.logements = this.logements.filter(logement => logement.id !== id);
          resolve({});
        }); 
      }
                      
  static addLogement(logement: Logement): Promise<Logement> {
        // delete logement.created;
    
        if(this.isDev) {
          return fetch(`http://localhost:3001/logements`, {
            method: 'POST',
            body: JSON.stringify(logement),
            headers: { 'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .catch(error => this.handleError(error));
        }
    
        return new Promise(resolve => {    
          this.logements.push(logement);
          resolve(logement);
        }); 
      }
    
      static searchLogement(term: string): Promise<Logement[]> {
        if(this.isDev) {
          return fetch(`http://localhost:3001/logements?q=${term}`)
          .then(response => response.json())
          .catch(error => this.handleError(error));
        }
    
        return new Promise(resolve => {    
          const results = this.logements.filter(logement => logement.title.includes(term));
          resolve(results);
        });
    
      }
        static isEmpty(data: Object) {
                return Object.keys(data).length===0;
                                
}

static handleError(error: Error):void {
        console.log(error);
        
}



}
