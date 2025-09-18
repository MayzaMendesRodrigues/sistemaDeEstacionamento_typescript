![Capa](https://github.com/user-attachments/assets/2d41de05-f2bc-4077-9b2c-17baea87b494)

# Sistema de Controle de Estacionamento

Um sistema simples para gerenciamento de veículos em um estacionamento, desenvolvido em **TypeScript** para reforçar conceitos da linguagem.

---

## Funcionalidades

- Cadastro de veículos com nome, placa e horário de entrada
- Armazenamento local usando `localStorage`
- Listagem de veículos estacionados
- Cálculo de tempo permanecido
- Cálculo de tarifa
- Remoção de veículos com confirmação
- Interface responsiva

---

## Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **HTML5** - Estrutura da página
- **CSS** - Estilização básica
- **LocalStorage** - Persistência de dados

---

## Como Executar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
``

2. Instale as dependências (se necessário):

   ```bash
   npm install
   ```

3. Compile o TypeScript:

   ```bash
   tsc script.ts
   ```

4. Abra o arquivo `index.html` no navegador.

---

## Estrutura do Projeto

```
estacionamento/
├── index.html
├── script.ts
├── script.js (compilado)
└── README.md
```

---

## Funcionalidades Futuras

### Sistema de Cobrança

* Tarifas por hora
* Descontos para clientes frequentes
* Relatórios financeiros

### Validações Avançadas

* Validação de placa de veículo (Mercosul e antigo)
* Prevenção de entradas duplicadas
* Campos obrigatórios com validação em tempo real

### Interface Melhorada

* Dashboard com estatísticas
* Busca e filtros de veículos
* Paginação para muitos registros

### Implementação de Testes

* Testes unitários e de integração para funcionalidades principais

### Melhorias de UX/UI

* Feedback visual
* Animações de entrada/saída
* Notificações tipo toast
* Loading states

---

## Aprendizados de TypeScript

Este projeto reforçou:

* ✅ Tipagem estática e inferência de tipos
* ✅ Interfaces e contratos de código
* ✅ Manipulação do DOM com type safety
* ✅ Organização de código com módulos
* ✅ Tratamento de dados persistentes
* ✅ Boas práticas de desenvolvimento

