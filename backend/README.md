# Card Control Backend

## Funcionalidades

- [x] Cadastrar de usuario
- [x] Autenticaar usuário
- [x] Cadastrar de compras com responsável, valor, descrição, status e data da compra.
- [x] Visualizar de todas as compras feitas e valor total.
- [x] Filtrar por data (usuário define o range de datas de acordo com abertura e fechamento de sua fatura)
- [x] Filtrar por responsável
- [x] Salvar histórico de responsáveis(para facilitar registros futuros)
- [ ] Dividir uma compra em meses diferentes(simular a fatura com compras parceladas)
- [x] Editar compras
- [x] Excluir compras

<br>
<br>

# API Documentation

## Endpoints do Usuário

### Registrar Usuário

**POST** `http://localhost:4000/user/create`

**Headers:**

```json
  Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "User 2",
  "email": "exemplodeemail@email.com",
  "password": "123456"
}
```

### Login

**POST** `http://localhost:4000/user/login`

**Headers:**

```json
  Content-Type: application/json
```

**Request Body:**

```json
{
  "email": "exemplodeemail@email.com",
  "password": "123456"
}
```

## Endpoints das Compras

### Criar/Cadastrar compra

**POST** `http://localhost:4000/purchase/create`

**Headers:**

```json
  Content-Type: application/json
  Authorization:Bearer + token
```

**Request Body:**

```json
{
  "description": "Descrição da compra",
  "price": 199.99,
  "purchasedIn": "2024/07/31",
  "responsible": "Fulano da Silva",
  "status": false
}
```

### Listar

**GET** `http://localhost:4000/purchase/list?dateStart=2024-01-19&dateEnd=2024-02-19`

- dateStart = data de abertura da fatura
- dateEnd = data de fechamento da fatura

**Headers:**

```json
Authorization: Bearer + token
```

### Excluir

**DELETE** `http://localhost:4000/purchase/id-da-compra`

**Headers:**

```json
Authorization: Bearer + token
```

### Atualizar

**PUT** `http://localhost:4000/purchase/id-da-compra`

**Headers:**

```json
Content-Type: application/json
Authorization: Bearer + token
```

**Request Body:**

```json
{
  "description": "Descrição atualizada",
  "price": 14.99,
  "purchasedIn": "2024/07/31",
  "responsible": "Fulano da Silva",
  "status": true
}
```

### Filtrar pelo responsável

**GET** `http://localhost:4000/purchase/filter/Nome do Responsável?dateStart=2024-01-19&dateEnd=2024-02-19`

- dateStart = data de abertura da fatura
- dateEnd = data de fechamento da fatura

**Headers:**

```json
Authorization: Bearer + token
```

### Pegar por Id

**GET** `http://localhost:4000/purchase/id-da-compra`

**Headers:**

```json
Authorization: Bearer + token
```

## Endpoints do Responsável

### Listar

**GET** `http://localhost:4000/responsible/list
`

**Headers:**

```json
Authorization: Bearer + token
```
