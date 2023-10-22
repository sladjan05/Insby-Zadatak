# Insby Zadatak - Slađan Stevanović

## Korištene tehnologije

-   **[Next.js](https://nextjs.org)**
-   **[Typescript](https://www.typescriptlang.org)**
-   **[tRPC](https://trpc.io)**
-   **[Tailwind CSS](https://tailwindcss.com)**
-   **[Prisma](https://www.prisma.io)**

## Struktura fajlova

-   **src**
    -   **app** - svi dijelovi aplikacije kojima klijent može pristupiti
        -   **api** - svi API endpoint-i (u principu tu je smješten samo tRPC endpoint)
    -   **components** - React komponente
    -   **hooks** - "custom" hook-ovi
    -   **prisma**
        -   **client.ts** - sadrži konstantu `client` kojom pristupamo bazi podataka
    -   **providers** - React provajderi
    -   **server**
        -   **data** - sadrži sve API-ove
        -   **routers** - sadrži sve tRPC rutere
    -   **trpc** - sadrži klijentskog i serverskog tRPC klijenta
    -   **types** - svi [...].d.ts fajlovi
    -   **utils** - pomoćni alati
    -   **tests** - testovi
    -   **middleware.ts** - Next.js middleware
-   **prisma**
    -   **schema.prisma** - šema baze podataka

## Kako pokrenuti server?

### Popuniti `.env` fajl:

```
INSBY_API_USERNAME="..."
INSBY_API_PASSWORD="..."

DATABASE_URL="postgresql://..."
```

### U komandnoj liniji sa ishodištem u folderu projekta pokrenuti:

```
    bun install
    bun prisma db push
    bun prisma generate
    bun dev
```
