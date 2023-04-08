import apply from "@/utils/apply";
import Animal, { AnimalTypes } from "@/base/Animal";

const defaultOptions: Partial<Human> = {
    type: AnimalTypes.Human
}

export enum Genders {
    Male = "male",
    Female = "female"
}

class Human extends Animal {
    public firstName?: string;
    public lastName?: string;
    public dateOfBirth?: Date;
    public gender?: Genders

    public constructor(options?: Partial<Human>) {
        super(options);
        apply(this, {
            ...defaultOptions,
            ...options
        })
    }

    public getFullName() {
        return (this.firstName || this.lastName) ? `${this.firstName || ""}${this.lastName ? ` ${this.lastName}` : ""}`.trim() : null;
    }

    public getAge() {
        if (!this.dateOfBirth) return null;
        return (new Date().getFullYear() - this.dateOfBirth.getFullYear())
    }

    public getMonthsSinceBirth() {
        const age = this.getAge();
        if (isNaN(age)) return null;
        return age * 12;
    }

    public isBirthdayToday() {
        if (!this.dateOfBirth) return null;
        const now = new Date();
        return (this.dateOfBirth.getMonth() === now.getMonth() && this.dateOfBirth.getDate() === now.getDate());
    }
}

export default Human;