import apply from "@/utils/apply";
import Human, { Genders } from "@/base/Human";
import { Except } from 'type-fest'

const defaultOptions: Partial<FemaleHuman> = {}

class FemaleHuman extends Human {
    public override readonly gender?: Genders = Genders.Female;

    public constructor(options?: Partial<Except<FemaleHuman, "gender">>) {
        super(options)
        apply(this, {
            ...defaultOptions,
            ...options
        })
    }

}

export default FemaleHuman;