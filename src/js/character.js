export class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;

        const typeHeroes = [
            "Bowerman",
            "Daemon",
            "Magician",
            "Swordsman",
            "Undead",
            "Zombie",
          ];

          if (typeof name !== "string") {
            throw new Error("Имя должно быть строкой");
          }
          if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть от 2 до 10 символов");
          }
          if (!typeHeroes.includes(type)) {
            throw new Error("Неверный тип персонажа");
          }
    }
}