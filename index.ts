/* Описать царства живой природы используя механизмы ООП в ts

https://obrazovaka.ru/biologiya/carstva-zhivoy-prirody-5-klass.html */

/* Вирусы находятся обособленно, так как являются внутриклеточными паразитами на генетическом уровне. 
Не имея собственной клетки, они используют клетки других организмов для размножения.
По своей структуре данные паразитические формы состоят из молекул ДНК или РНК,
покрытые капсидом (оболочкой из вирусных белков). */
abstract class Viruses{
    private name: string;
    private infectiousOrganisms: string[];
    private incubationPeriod: number;
    private isLethal: boolean;
}


/* Бактерии  – устроены достаточно просто, у них отсутствуют органоиды, 
нет ядерной оболочки, кольцевая молекула ДНК располагается в цитоплазме. 
Питание таких организмов может происходить через клеточную поверхность или 
они самостоятельно вырабатывают питательные вещества (цианобактерии). */
class Bacteria{
    private name: string;
    private shape: string;
    private inHumanMicroflora: boolean;
    private resistanceTemperature: boolean;
    private resistanceUv: boolean;
    private resistanceAlcohol: boolean;
}

/* Растения – отличительным признаком растительной клетки являются пластиды, 
одни из которых – хлоропласты. 
В них происходит фотосинтез – процесс образования из неорганических веществ (вода, углекислый газ) 
под действием солнечной энергии органических питательных веществ. */
class Plants{
    private name;
    private breedingType: BreedingType;
}

enum BreedingType {
    sexual, 
    asexual, 
    vegetative
}

/* Грибы – царство живой природы, которое объединяет признаки растений и животных. 
Сходство с растительным организмом – наличие плотной клеточной стенки, которая формируется из хитина. 
У грибов нет пластид, поэтому сами «приготовить себе еду» они не могут. Так же, как и животные, они гетеротрофы. 
Питаются грибы готовыми питательными веществами путём всасывания их из окружающей среды. 
Особенность строения грибов – наличие гиф (тонких нитей), которые образуют сплетения, называемые мицелием.*/
class Mushroom{
    private cap: Cap;
    private stipe: Stipe;
    private name: string;
    private isEdible: boolean;

    constructor(cap: Cap, stipe: Stipe, name: string, isEdible: boolean){
        this.cap = cap;
        this.stipe = stipe;
        this.name = name;
        this.isEdible = isEdible;
    }

    getCap(): Cap{
        return this.cap;
    }

    getStipe(): Stipe{
        return this.stipe;
    }

    toString(): string{
        return `name: ${this.name}, cap: ${this.cap.toString()}, stipe: ${this.stipe.toString()}, isEdible: ${this.isEdible}`;
    }
}

class Cap{
    private radius: number;
    private height: number;
    
    constructor(radius: number, height: number){
        this.radius = radius;
        this.height = height;
    }

    getRadius(): number{
        return this.radius;
    }

    getHeight(): number{
        return this.height;
    }

    toString(): string{
        return `radius: ${this.radius}, height ${this.height}`;
    }
}

class Stipe{
    private radius: number;
    private height: number;
    
    constructor(radius: number, height: number){
        this.radius = radius;
        this.height = height;
    }

    getRadius(): number{
        return this.radius;
    }

    getHeight(): number{
        return this.height;
    }

    toString(): string{
        return `radius: ${this.radius}, height ${this.height}`;
    }
}

/* Животные – являются гетеротрофами. 
Животная клетка не имеет плотной оболочки, поэтому некоторые из них могут сокращаться,образуя мышечные ткани. 
Такая особенность даёт возможность активно двигаться в поисках пищи. 
Клетки животных имеют центриоли, расположенные возле ядра, играющие важную роль во время процесса деления. */
class Animals{
    private name: string;
    private foodType: FoodType;
    private lifeExpectancy: number;
    private isDomesticated: boolean;
}

enum FoodType {
    herbivorous,
    carnivores,
    omnivores
}