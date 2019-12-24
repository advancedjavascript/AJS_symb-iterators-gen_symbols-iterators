export default class Team {
    constructor() {
        this.team = [{
                name: 'Лучник',
                type: 'Bowman',
                health: 100,
                level: 1,
                attack: 25,
                defence: 25,
            },
            {
                name: 'Мечник',
                type: 'Swordsman',
                health: 100,
                level: 1,
                attack: 40,
                defence: 10,
            },
            {
                name: 'Маг',
                type: 'Magician',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40,
            },
            {
                name: 'Демон',
                type: 'Daemon',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40,
            },
        ];
    }

    [Symbol.iterator]() {
        const teams = this.team;
        let index = 0;

        return {
            next() {
                const result = {
                    value: undefined,
                    done: true,
                };

                if (index < teams.length) {
                    result.value = teams[index];
                    result.done = false;
                    index += 1;
                }
                return result;
            },
        };
    }
}