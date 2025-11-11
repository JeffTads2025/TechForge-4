abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            console.log(`[Filmes] Adicionado: ${item}`);
        } else {
            console.log(`[Filmes] Aviso: ${item} já está na lista.`);
        }
    }

    getFavorites(): string[] {
        return [...this.favorites].sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    
    addFavorite(item: string): void {
        this.favorites.unshift(item);
        console.log(`[Livros] Adicionado ao início: ${item}`);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}


const moviesManager = new MoviesFavoriteManager();
const booksManager = new BooksFavoriteManager();

console.log("\n--- TESTE DE FILMES (Sem Duplicatas, Ordenado) ---");
moviesManager.addFavorite("Pulp Fiction");
moviesManager.addFavorite("Matrix");
moviesManager.addFavorite("Matrix");
moviesManager.addFavorite("A Origem"); 


console.log("\n--- TESTE DE LIVROS (Inserção no Início) ---");
booksManager.addFavorite("1984"); 
booksManager.addFavorite("O Pequeno Príncipe"); 
booksManager.addFavorite("Duna"); 


console.log("\n--- FAVORITOS FINAIS ---");
console.log("Filmes Favoritos (Ordenado):", moviesManager.getFavorites());
console.log("Livros Favoritos (Ordem de Inserção):", booksManager.getFavorites());