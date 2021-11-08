export interface CEP{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export const ceps = [
    {
        cep: "01001-000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP"
    },{
        cep: "94859-060",
        logradouro: "Rua Maria Odete de Oliveira Charão",
        complemento: "lado par",
        bairro: "Jarim Algarve",
        localidade: "Alvorada",
        uf: "RS"
    }
]