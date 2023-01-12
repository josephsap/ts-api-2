import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5432,
    username: "admin",
    password: "password123",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.entity{.ts,.js}'],
    migrations: [],
    subscribers: [],
})
