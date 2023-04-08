import apply from "@/utils/apply";

export enum AnimalTypes {
    Human = "human"
}

const defaultOptions: Partial<Animal> = {}

class Animal {
    public type: AnimalTypes;

    public constructor(options?: Partial<Animal>) {
        apply(this, {
            ...defaultOptions,
            ...options
        })
    }

}

export default Animal;