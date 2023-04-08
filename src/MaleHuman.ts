import apply from "@/utils/apply";
import Human, { Genders } from "@/base/Human";
import { Except } from 'type-fest'

const defaultOptions: Partial<MaleHuman> = {}

class MaleHuman extends Human {
    public override readonly gender?: Genders = Genders.Male;

    public constructor(options?: Partial<Except<MaleHuman, "gender">>) {
        super(options)
        apply(this, {
            ...defaultOptions,
            ...options
        })
    }

}

export default MaleHuman;