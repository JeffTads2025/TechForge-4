abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    
    addItem(item: string, quantity: number): void {
        if (quantity > 0) {
            this.items[item] = (this.items[item] || 0) + quantity;
            console.log(`[Armazém] Entrada de ${quantity}x ${item}.`);
        }
    }

    removeItem(item: string): void {
        if (this.items[item] !== undefined) {
            const removedQuantity = this.items[item];
            delete this.items[item];
            console.log(`[Armazém] Item ${item} (Total: ${removedQuantity}) removido completamente.`);
        } else {
            console.log(`[Armazém] Erro: Item "${item}" não encontrado para remoção.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private readonly MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
        const currentQuantity = this.items[item] || 0;
        const newTotal = currentQuantity + quantity;

        if (newTotal > this.MAX_QUANTITY) {
            const allowedToAdd = this.MAX_QUANTITY - currentQuantity;
            
            if (allowedToAdd > 0) {
                this.items[item] = this.MAX_QUANTITY;
                console.log(`[Loja] Limite! Adicionado ${allowedToAdd}x ${item}. Total: ${this.MAX_QUANTITY}.`);
            } else {
                console.log(`[Loja] Item ${item} já está no limite (${this.MAX_QUANTITY}).`);
            }
        } else if (quantity > 0) {
            this.items[item] = newTotal;
            console.log(`[Loja] Adicionado ${quantity}x ${item}. Novo total: ${this.items[item]}.`);
        }
    }

    removeItem(item: string): void {
        if (this.items[item] !== undefined) {
            const removedQuantity = this.items[item];
            delete this.items[item];
            console.log(`[Loja] Item ${item} (Total: ${removedQuantity}) removido completamente.`);
        } else {
            console.log(`[Loja] Erro: Item "${item}" não encontrado para remoção.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}


const warehouse = new WarehouseInventory();
const store = new StoreInventory();

console.log("\n--- TESTE DE ARMAZÉM (Grandes Quantidades) ---");
warehouse.addItem("Barra de Chocolate", 500);
warehouse.addItem("Chicletes", 1500);
warehouse.addItem("Barra de Chocolate", 300);
warehouse.removeItem("Chicletes");


console.log("\n--- TESTE DE LOJA (Limite Máximo de 10) ---");
store.addItem("Torta de Maçã", 5); 
store.addItem("Brigadeiro Gourmet", 12); 
store.addItem("Torta de Maçã", 4); 
store.addItem("Torta de Maçã", 3); 
store.removeItem("Brigadeiro Gourmet");

console.log("\n--- INVENTÁRIO FINAL ---");
console.log("Inventário do Armazém:", warehouse.getInventory());
console.log("Inventário da Loja:", store.getInventory());