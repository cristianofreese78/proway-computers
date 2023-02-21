export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem:"./assets/mouseGamer.jpg", quantidadeEstoque: 20},
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/monitorWide.jpg", quantidadeEstoque: 15},
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/tecladoABNT.jpg", quantidadeEstoque: 5},
    { id: 4, descricao: "HD super rápido", preco: 800.30, descricaoPreco: "À vista no PIX", imagem:"./assets/HD.jpg", quantidadeEstoque: 30},
    { id: 5, descricao: "Mouse Pad liso", preco: 12.45, descricaoPreco: "À vista no PIX", imagem:"./assets/mousePad.jpg", quantidadeEstoque: 40}
]