import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1726230972936 implements MigrationInterface {
    name = ' $npmConfigName1726230972936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cars_brand_enum" AS ENUM('TOYOTA', 'HONDA', 'FORD', 'BMW')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_year_enum" AS ENUM('1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_region_enum" AS ENUM('Вінницька область', 'Волинська область', 'Дніпропетровська область', 'Донецька область', 'Житомирська область', 'Закарпатська область', 'Запорізька область', 'Івано-Франківська область', 'Київська область', 'Кіровоградська область', 'Луганська область', 'Львівська область', 'Миколаївська область', 'Одеська область', 'Полтавська область', 'Рівненська область', 'Сумська область', 'Тернопільська область', 'Харківська область', 'Херсонська область', 'Хмельницька область', 'Черкаська область', 'Чернігівська область', 'Чернівецька область')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_currency_enum" AS ENUM('UAH', 'USD', 'EUR')`);
        await queryRunner.query(`CREATE TYPE "public"."cars_status_enum" AS ENUM('active', 'inactive', 'deleted', 'banned')`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" "public"."cars_brand_enum" NOT NULL, "model" text NOT NULL, "year" "public"."cars_year_enum" NOT NULL, "specification" text NOT NULL, "photo" text NOT NULL, "region" "public"."cars_region_enum" NOT NULL, "price" integer NOT NULL, "currency" "public"."cars_currency_enum" NOT NULL, "status" "public"."cars_status_enum" NOT NULL DEFAULT 'inactive', CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TYPE "public"."cars_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_currency_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_region_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_year_enum"`);
        await queryRunner.query(`DROP TYPE "public"."cars_brand_enum"`);
    }

}
