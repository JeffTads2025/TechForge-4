abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Eleição] Voto computado para: ${candidate}.`);
    }

    getResults(): Record<string, number> {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Pesquisa] Voto computado para: ${candidate}.`);
    }

    getResults(): [string, number][] {
        const resultsArray = Object.entries(this.votes);

        resultsArray.sort((a, b) => b[1] - a[1]);

        return resultsArray;
    }
}


const municipalElection = new Election();
const quickPoll = new Poll();

console.log("\n--- TESTE DE ELEIÇÃO (Contagem Bruta) ---");
municipalElection.voteFor("Tauillo");
municipalElection.voteFor("Marcio Nunes");
municipalElection.voteFor("Tauillo");
municipalElection.voteFor("Douglas");
municipalElection.voteFor("Tauillo");


console.log("\n--- TESTE DE PESQUISA (Resultado Ordenado) ---");
quickPoll.voteFor("Marcio Nunes");
quickPoll.voteFor("Douglas");
quickPoll.voteFor("Marcio Nunes");
quickPoll.voteFor("Tauillo");
quickPoll.voteFor("Marcio Nunes");
quickPoll.voteFor("Douglas");


console.log("\n--- RESULTADOS FINAIS ---");
console.log("Resultados da Eleição (Objeto Bruto):", municipalElection.getResults());
console.log("Resultados da Pesquisa (Ordenado por Votos):", quickPoll.getResults());